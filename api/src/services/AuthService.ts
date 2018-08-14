import { inject, injectable } from 'inversify'
import { EntityManager, Repository } from 'typeorm'
import { User } from '../entities/User'
import {validate} from "class-validator";
import { EncryptionService } from '../services/EncryptionService';
import {classToPlain} from "class-transformer";

export interface ILoginPayload {
    password: string;
    email: string;
}
export interface IRegisterPayload {
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    age: number;
}
@injectable()
export class AuthService {
    userRepository: Repository<User>
    encryptionService: EncryptionService;
    constructor(
        @inject('EntityManager') entityManager: EntityManager,
        @inject('EncryptionService') encryptionService: EncryptionService,
    ) {
        this.userRepository = entityManager.getRepository(User);
        this.encryptionService = encryptionService;
    }

    login = async (payload: ILoginPayload) => {
        const userRepsonse = await this.userRepository.findOne({email: payload.email})

        const isValidPassword = this.encryptionService.compare(payload.password, userRepsonse.password);
        console.log(isValidPassword)
        const errorResponse = {
            error: 'invalid credentials' 
        }
        if(userRepsonse && isValidPassword) {
            return {
                token: this.encryptionService.sign(this.toJson(userRepsonse))
            };
        } else {
            throw errorResponse;
        }
    }

    register = async(payload: IRegisterPayload) => {
        const exitingUser = await this.userRepository.findOne({email: payload.email})
        if(exitingUser) {
            throw [{error: 'email aleardy exists'}];
        }
        const hash = this.encryptionService.encrypt(payload.password);
        const user = new User();
        user.age = payload.age;
        user.email = payload.email;
        user.firstName = payload.firstName;
        user.lastName = payload.lastName;
        user.password = hash; 
        const errors = await validate(user);
        if(errors.length > 0) {
            const err = errors.map(error => error.constraints);
            throw err;
        }
        const userRepsonse =  await this.userRepository.save(user);
        return {
                token: this.encryptionService.sign(this.toJson(userRepsonse))
            };
    }

    toJson = (user: User) => {
        const newUser = classToPlain(user);
        console.log(newUser)
        return classToPlain(user);
    }  
}
