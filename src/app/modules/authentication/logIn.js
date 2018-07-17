import React from 'react'
import { observer, inject } from 'mobx-react'
import { translate } from 'react-i18next'
import { FloatingInput, Checkbox, Button } from '../elements'
import { loginStyles } from './login.css'

@inject('appStore', 'router')
@translate(['data'])
@observer
export class LogIn extends React.Component {
  onSingIn = async () => {
    const authenticationStore = this.props.appStore.authenticationStore

    await authenticationStore.signInEmail()
    if (authenticationStore.isUserLogedIn) {
      this.props.router.push('/home-page')
    }
  }
  onFacebookSignIn = async () => {
    const authenticationStore = this.props.appStore.authenticationStore

    await authenticationStore.signInFacebook()
    if (authenticationStore.isUserLogedIn) {
      this.props.router.push('/home-page')
    }
  }
  onTwitterSignIn = async () => {
    const authenticationStore = this.props.appStore.authenticationStore

    await authenticationStore.signInTwitter()
    if (authenticationStore.isUserLogedIn) {
      this.props.router.push('/home-page')
    }
  }
  render() {
    const authenticationStore = this.props.appStore.authenticationStore
    const formStore = authenticationStore.loginForm;
    const { t } = this.props
    return (
      <div>
        <div className="title h6"> {t('authentication.loginTitle')}</div>
        <form className="content">
          <div className="row">
            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <FloatingInput
                {...formStore.$('email').bind({type: 'email',
                                                label: t('authentication.mailInputLabel')
                                              })}
              />
                <p>{formStore.$('email').error}</p>
              <FloatingInput
                {...formStore.$('password').bind({
                                                  type: 'password',
                                                  label: t('authentication.passwordInputLabel')
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
                <a href="#" onClick={authenticationStore.setRegisterFormActive}>
                  {t('authentication.registerNowText')}
                </a>{' '}
                {t('authentication.createAccountCall')}
              </p>
            </div>
          </div>
        </form>
        <style jsx>{loginStyles}</style>
      </div>
    )
  }
}
