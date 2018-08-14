import { inject, injectable } from 'inversify'
import { EntityManager, Repository } from 'typeorm'
import { User } from '../entities/User'
import {validate} from "class-validator";

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
    constructor(
        @inject('EntityManager') entityManager: EntityManager,
    ) {
        this.userRepository = entityManager.getRepository(User);
    }

    login = async (payload: ILoginPayload) => {
        const userRepsonse = await this.userRepository.findOne({email: payload.email})

        const isValidPassword = bcrypt.compareSync(payload.password, userRepsonse.password);

        const errorResponse = {
            error: 'invalid credentials' 
        }
        if(userRepsonse && isValidPassword) {
            return {
                token: jwt.sign(this.toJson(userRepsonse), '1234')
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
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(payload.password, salt);
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
                token: jwt.sign(this.toJson(userRepsonse), '1234')
            };
    }

    toJson = (user: User) => {
        return {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age
        }
    }  
}
