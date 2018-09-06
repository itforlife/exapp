
import * as React from 'react';
import { Button, Checkbox, FloatingInput } from '@elements/index';
import { labels } from '@i18n/en_EN';

interface ILogInForm {
    labels: typeof labels;
    emailError?: string;
    passwordError?: string;
    email?: string;
    password?: string;
}

export const LogInForm = (props: ILogInForm) => (
<form data-controller="ajaxForm" action="/login">
    <div className="row">
        <div className="col col-12">
            <p>{'userStore.errorMessage'}</p>
            <FloatingInput
                type="email"
                name="email"
                value={props.email}
                error={!!props.emailError}
                data-target="ajaxForm.field"
                label={labels.authentication.mailInputLabel}
            />
            <p>{props.emailError}</p>
            <FloatingInput
                type="password"
                name="password"
                value={props.password}
                error={!!props.passwordError}
                data-target="ajaxForm.field"
                label={labels.authentication.passwordInputLabel}
            />
            <p>{props.passwordError}</p>

            <div>
                <Checkbox
                    name={'rememberMe'}
                    data-target="ajaxForm.field"
                    label={labels.authentication.rememberMe}
                />
                <a href="#">
                    {labels.authentication.forgotPasswordLabel}
                </a>
            </div>
            <Button className="btn btn-lg btn-primary" data-action="ajaxForm#submit">
                {labels.authentication.loginButton}
            </Button>
        </div>
    </div>
</form>
);