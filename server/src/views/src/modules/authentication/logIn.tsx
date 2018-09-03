import * as React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import { Button, Checkbox, FloatingInput } from '../elements'

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
            // TODO
            console.log('twitter login')
        }
        public render() {
            const { t, appStore } = this.props
            const { userStore } = appStore
            const formStore = userStore.loginForm
            return (
                <div>
                    <div> {t('authentication.loginTitle')}</div>
                    <form>
                        <div className="row">
                            <div className="col col-12">
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

                                <div>
                                    <Checkbox
                                        name={'optionsCheckboxes'}
                                        label={t('authentication.rememberMe')}
                                    />
                                    <a href="#">
                                        {t(
                                            'authentication.forgotPasswordLabel'
                                        )}
                                    </a>
                                </div>
                                <Button
                                    className="btn btn-lg btn-primary"
                                    onClick={this.onSingIn}
                                >
                                    {t('authentication.loginButton')}
                                </Button>
                                <div>OR</div>

                                <Button onClick={this.onFacebookSignIn}>
                                    <i aria-hidden="true">fb icon</i>
                                    {t('authentication.loginFacebookButton')}
                                </Button>
                                <Button onClick={this.onTwitterSignIn}>
                                    <i aria-hidden="true">twitter icon</i>
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
