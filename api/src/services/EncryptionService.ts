import { secret } from '../../config/config'
import { Service } from 'typedi'

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

@Service()
export class EncryptionService {
    sign = payload => {
        return jwt.sign(payload, secret)
    }
    encrypt = (value: string) => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(value, salt)
    }
    compare = (currentValue: string, correctValue: string) => {
        return bcrypt.compareSync(currentValue, correctValue)
    }
}
