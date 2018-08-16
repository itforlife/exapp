import { Repository } from 'typeorm'
import { User } from '../entities/User'
import { EncryptionService } from '../services/EncryptionService'
import { classToPlain } from 'class-transformer'
import { Service, Inject } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { validate } from 'class-validator'

@Service()
export class AuthService {
    @InjectRepository(User)
    userRepository: Repository<User>
    @Inject()
    encryptionService: EncryptionService

    login = async (password: string, email: string) => {
        const currentUser = await this.userRepository.findOne({ email })

        const isValidPassword = this.encryptionService.compare(
            password,
            currentUser.password
        )
        const errorResponse = {
            error: 'invalid credentials',
        }
        if (currentUser && isValidPassword) {
            return {
                token: this.encryptionService.sign(classToPlain(currentUser)),
            }
        } else {
            throw errorResponse
        }
    }

    register = async (user: User, password) => {
        const exitingUser = await this.userRepository.findOne({
            email: user.email,
        })
        if (exitingUser) {
            throw [{ error: 'email aleardy exists' }]
        }
        const hash = this.encryptionService.encrypt(password)
        user.password = hash
        const errors = await validate(user)
        if (errors.length > 0) {
            const err = errors.map(error => error.constraints)
            throw err
        }

        const userResponse = await this.userRepository.save(user)
        return {
            token: this.encryptionService.sign(classToPlain(userResponse)),
        }
    }
}
