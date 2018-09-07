import * as React from 'react';
import { Button } from '@elements/index';
import { LogInForm } from './LogInForm';
import { labels } from '@i18n/en_EN';
import { Dropdown } from '@elements/Dropdown';

interface ILogInForm {
    labels: typeof labels;
}

export class LogIn extends React.Component<ILogInForm> {
    public render() {
        const { labels } = this.props;
        return (
            <div data-controller="socialAuth">
                <div> {labels.authentication.loginTitle}</div>
                <LogInForm labels={labels} />
                <div>OR</div>

                <Button name="facebook" data-action="socialAuth#login">
                    <i aria-hidden="true">fb icon</i>
                    {labels.authentication.loginFacebookButton}
                </Button>
                <Button name="twitter" data-action="socialAuth#login">
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
