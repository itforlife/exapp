import { validate } from 'class-validator';
import { Service } from 'typedi';

@Service()
export class ValidationErrorsFormatter {
    async errorsForEntity(entity: any, scenario?: string) {
        const validationErrors = await validate(entity);
        return validationErrors.reduce((acc,err) => {
            const firstError = Object.keys(err.constraints)[0];
            acc[err.property] = err.constraints[firstError];
            return acc;
        }, {});
    }
}