import { labels } from '@i18n/en_EN';
type LanguageStrings = typeof labels;

export class ServiceResult {
    errorCode: string | null = '';
    status: 'ok' | 'failure' = 'ok';
    data?: Object;
    error(errorCode: string) {
        this.status = 'failure';
        this.errorCode = errorCode;
        this.data = null;
        return this;
    }
    success(data: Object) {
        this.status = 'ok';
        this.errorCode = null;
        this.data = data;
        return this;
    }
    formatError(labels: LanguageStrings) {
        return this.status === 'failure' ? labels.errors[this.errorCode] : ''
    }
}