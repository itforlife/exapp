import * as React from 'react';
import { Button } from '@elements/index';
import { LogInForm } from '@partials/authentication/LogInForm';
import { labels } from '@i18n/en_EN';

interface ILogInForm {
    labels: typeof labels;
}

export class LogIn extends React.Component<ILogInForm> {
    public render() {
        const { labels } = this.props;
        return (
            <div data-controller="social-auth">
                <div> {labels.authentication.loginTitle}</div>
                <LogInForm labels={labels} />
                <div>OR</div>

                <Button name="facebook" data-action="social-auth#login">
                    <i aria-hidden="true">fb icon</i>
                    {labels.authentication.loginFacebookButton}
                </Button>
                <Button name="twitter" data-action="social-auth#login">
                    <i aria-hidden="true">twitter icon</i>
                    {labels.authentication.loginTwitterButton}
                </Button>
                <p>
                    {labels.authentication.noAccountText}{' '}
                    <a href="#">
                        {labels.authentication.registerNowText}
                    </a>{' '}
                    {labels.authentication.createAccountCall}
                </p>
            </div>
        );
    }
}
