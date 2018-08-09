import { inject, injectable } from 'inversify'
import { EntityManager, Repository } from 'typeorm'
import { User } from '../entities/User'

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
        const userRepsonse = await this.userRepository.findOne({email: payload.email, password: payload.password})
        if(userRepsonse) {
            return {
                email: userRepsonse.email,
                firstName: userRepsonse.firstName,
                lastName: userRepsonse.lastName,
                age: userRepsonse.age
            }
        }
        return {
           error: 'user not found' 
        }
    }
    register = async(payload: IRegisterPayload) => {
        const user = new User();
        const userRepsonse =  await this.userRepository.save({...user, ...payload});
        return {
            email: userRepsonse.email,
            firstName: userRepsonse.firstName,
            lastName: userRepsonse.lastName,
            age: userRepsonse.age
        }
    }
}
