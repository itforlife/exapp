import * as React from 'react'
import { comp, IInjectedProps } from '../../utils/decorators'
import { Button, Checkbox, FloatingInput } from '../elements'
import { loginStyles } from './login.css'

export const LogIn = comp(
  class extends React.Component<IInjectedProps> {
    get injectedProps() {
      return this.props as IInjectedProps
    }
    public onSingIn = async () => {
      const { appStore, router } = this.injectedProps
      const authenticationStore = appStore.authenticationStore

      await authenticationStore.signInEmail()

    }
    public onFacebookSignIn = async () => {
      const { appStore, router } = this.injectedProps
      const authenticationStore = appStore.authenticationStore

      await authenticationStore.signInFacebook()

    }
    public onTwitterSignIn = async () => {
      const { appStore, router } = this.injectedProps
      const authenticationStore = appStore.authenticationStore

      await authenticationStore.signInTwitter()

    }
    public render() {
      const { t, appStore } = this.injectedProps
      const { authenticationStore } = appStore
      const formStore = authenticationStore.loginForm
      return (
        <div>
          <div className="title h6"> {t('authentication.loginTitle')}</div>
          <form className="content">
            <div className="row">
              <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <FloatingInput
                  {...formStore.$('email').bind({
                    type: 'email',
                    label: t('authentication.mailInputLabel'),
                  })}
                />
                <p>{formStore.$('email').error}</p>
                <FloatingInput
                  {...formStore.$('password').bind({
                    type: 'password',
                    label: t('authentication.passwordInputLabel'),
                  })}
                />
                <p>{formStore.$('password').error}</p>

                <div className="remember">
                  <Checkbox
                    name={'optionsCheckboxes'}
                    label={t('authentication.rememberMe')}
                  />
                  <a href="#" className="forgot">
                    {t('authentication.forgotPasswordLabel')}
                  </a>
                </div>
                <Button
                  className="btn btn-lg btn-primary full-width"
                  onClick={this.onSingIn}
                >
                  {t('authentication.loginButton')}
                </Button>
                <div className="or" />

                <Button
                  className="btn btn-lg bg-facebook full-width btn-icon-left"
                  onClick={this.onFacebookSignIn}
                >
                  <i className="fab fa-facebook-f" aria-hidden="true" />
                  {t('authentication.loginFacebookButton')}
                </Button>
                <Button
                  className="btn btn-lg bg-twitter full-width btn-icon-left"
                  onClick={this.onTwitterSignIn}
                >
                  <i className="fab fa-twitter" aria-hidden="true" />{' '}
                  {t('authentication.loginTwitterButton')}
                </Button>
                <p>
                  {t('authentication.noAccountText')}{' '}
                  <a
                    href="#"
                    onClick={authenticationStore.setRegisterFormActive}
                  >
                    {t('authentication.registerNowText')}
                  </a>{' '}
                  {t('authentication.createAccountCall')}
                </p>
              </div>
            </div>
          </form>
          <style jsx={true}>{loginStyles}</style>
        </div>
      )
    }
  }
)
