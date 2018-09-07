
import * as React from 'react';
import { Button, Checkbox, FloatingInput } from '@elements/index';
import { labels } from '@i18n/en_EN';
import { User } from '@entities/User';

interface ILogInForm {
    labels: typeof labels;
    errors?: { [type: string]: string; },
    generalError?: string,
    user?: User;
}

export const LogInForm: React.SFC<ILogInForm> = (props: ILogInForm) => (
<form data-controller="ajax" action="/auth/login">
    <div className="row">
        <div className="col col-12">
            <p>{props.generalError}</p>
            <FloatingInput
                type="email"
                name="email"
                value={props.user.email}
                error={!!props.errors.email}
                label={labels.authentication.mailInputLabel}
            />
            <p>{props.errors.email}</p>
            <FloatingInput
                type="password"
                name="password"
                value={props.user.password}
                error={!!props.errors.password}
                label={labels.authentication.passwordInputLabel}
            />
            <p>{props.errors.password}</p>

            <div>
                <Checkbox
                    name={'rememberMe'}
                    label={labels.authentication.rememberMe}
                />
                <a href="#">
                    {labels.authentication.forgotPasswordLabel}
                </a>
            </div>
            <Button className="btn btn-lg btn-primary" data-action="ajax#submit">
                {labels.authentication.loginButton}
            </Button>
        </div>
    </div>
</form>
);

LogInForm.defaultProps = {
    errors: {},
    user: new User()
}