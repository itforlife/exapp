import * as React from 'react';
import { Button, Checkbox, FloatingInput } from '@elements/index';
import { labels } from '@i18n/en_EN';

interface ILogInForm {
    labels: typeof labels;
}

export class LogIn extends React.Component<ILogInForm> {
    public render() {
        const { labels } = this.props;
        return (
            <div>
                <div> {labels.authentication.loginTitle}</div>
                <form>
                    <div className="row">
                        <div className="col col-12">
                            <p>{'userStore.errorMessage'}</p>
                            <FloatingInput
                                type="email"
                                label={labels.authentication.mailInputLabel}
                            />
                            <p>{'Email error message'}</p>
                            <FloatingInput
                                type="password"
                                label={labels.authentication.passwordInputLabel}
                            />
                            <p>{"formStore.$('password').error"}</p>

                            <div>
                                <Checkbox
                                    name={'optionsCheckboxes'}
                                    label={labels.authentication.rememberMe}
                                />
                                <a href="#">
                                    {labels.authentication.forgotPasswordLabel}
                                </a>
                            </div>
                            <Button className="btn btn-lg btn-primary">
                                {labels.authentication.loginButton}
                            </Button>
                            <div>OR</div>

                            <Button>
                                <i aria-hidden="true">fb icon</i>
                                {labels.authentication.loginFacebookButton}
                            </Button>
                            <Button>
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
                    </div>
                </form>
            </div>
        );
    }
}
