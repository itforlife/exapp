import { Repository } from 'typeorm'
import { User } from '../entities/User'
import { EncryptionService } from '../services/EncryptionService';
import {classToPlain} from "class-transformer";
import { Service, Inject } from 'typedi';
import { InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class AuthService {
    @InjectRepository(User)
    userRepository: Repository<User>
    @Inject()
    encryptionService: EncryptionService;

    login = async (currentPassword: string, user: User) => {

        const isValidPassword = this.encryptionService.compare(currentPassword, user.password);
        const errorResponse = {
            error: 'invalid credentials' 
        }
        if(user && isValidPassword) {
            return {
                token: this.encryptionService.sign(this.toJson(user))
            };
        } else {
            throw errorResponse;
        }
    }

    register = async(user: User, password) => {
        const exitingUser = await this.userRepository.findOne({email: user.email})
        if(exitingUser) {
            throw [{error: 'email aleardy exists'}];
        }

        const hash = this.encryptionService.encrypt(password);
        user.password = hash;

        const userRepsonse =  await this.userRepository.save(user);
        return {
                token: this.encryptionService.sign(this.toJson(userRepsonse))
            };
    }

    toJson = (user: User) => {
        return classToPlain(user);
    }  
}
