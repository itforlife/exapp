import * as React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import { Button, Checkbox, FloatingInput } from '../elements'
import * as loginStyles from './login.scss'

export const LogIn = container(
    class extends React.Component<IInjectedProps> {
        public onSingIn = async () => {
            const { appStore } = this.props
            const userStore = appStore.userStore

            await userStore.signInEmail()
        }
        public onFacebookSignIn = async () => {
            const { appStore } = this.props
            const userStore = appStore.userStore

            await userStore.signInFacebook()
        }
        public onTwitterSignIn = async () => {
            const { appStore } = this.props
            const userStore = appStore.userStore

            await userStore.signInTwitter()
        }
        public render() {
            const { t, appStore } = this.props
            const { userStore } = appStore
            const formStore = userStore.loginForm
            return (
                <div>
                    <div className="title h6">
                        {' '}
                        {t('authentication.loginTitle')}
                    </div>
                    <form className={loginStyles.loginContent}>
                        <div className="row">
                            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <p>{userStore.errorMessage}</p>
                                <FloatingInput
                                    {...formStore.$('email').bind({
                                        type: 'email',
                                        label: t(
                                            'authentication.mailInputLabel'
                                        ),
                                    })}
                                />
                                <p>{formStore.$('email').error}</p>
                                <FloatingInput
                                    {...formStore.$('password').bind({
                                        type: 'password',
                                        label: t(
                                            'authentication.passwordInputLabel'
                                        ),
                                    })}
                                />
                                <p>{formStore.$('password').error}</p>

                                <div className={loginStyles.loginRemember}>
                                    <Checkbox
                                        name={'optionsCheckboxes'}
                                        label={t('authentication.rememberMe')}
                                    />
                                    <a
                                        href="#"
                                        className={loginStyles.loginForgot}
                                    >
                                        {t(
                                            'authentication.forgotPasswordLabel'
                                        )}
                                    </a>
                                </div>
                                <Button
                                    className="btn btn-lg btn-primary full-width"
                                    onClick={this.onSingIn}
                                >
                                    {t('authentication.loginButton')}
                                </Button>
                                <div className={loginStyles.or} />

                                <Button
                                    className="btn btn-lg bg-facebook full-width btn-icon-left"
                                    onClick={this.onFacebookSignIn}
                                >
                                    <i
                                        className="fab fa-facebook-f"
                                        aria-hidden="true"
                                    />
                                    {t('authentication.loginFacebookButton')}
                                </Button>
                                <Button
                                    className="btn btn-lg bg-twitter full-width btn-icon-left"
                                    onClick={this.onTwitterSignIn}
                                >
                                    <i
                                        className="fab fa-twitter"
                                        aria-hidden="true"
                                    />{' '}
                                    {t('authentication.loginTwitterButton')}
                                </Button>
                                <p>
                                    {t('authentication.noAccountText')}{' '}
                                    <a
                                        href="#"
                                        onClick={
                                            userStore.setRegisterFormActive
                                        }
                                    >
                                        {t('authentication.registerNowText')}
                                    </a>{' '}
                                    {t('authentication.createAccountCall')}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
)
