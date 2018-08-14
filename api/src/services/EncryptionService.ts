import { secret } from '../../config/config';
import { injectable } from 'inversify'

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

@injectable()
export class EncryptionService {

    sign = (payload) => {
        return jwt.sign(payload, secret);
    }
    encrypt = (value: string) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(value, salt);
    }
    compare = (currentValue: string, correctValue: string) => {
        return bcrypt.compareSync(currentValue, correctValue);
    }
}
