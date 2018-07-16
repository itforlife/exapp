import React from 'react'
import { observer, inject } from 'mobx-react'
import { translate } from 'react-i18next'
import { FloatingInput, Checkbox, Button } from '../elements'
import { indexStyles } from './index.css'

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
    const { t } = this.props

    return (
      <div>
        <div className="title h6"> {t('authentication.loginTitle')}</div>
        <form className="content">
          <div className="row">
            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <FloatingInput
                inputLabel={t('authentication.mailInputLabel')}
                inputType={'email'}
                onChange={authenticationStore.fieldChange}
                name={'email'}
                value={authenticationStore.inputValues.email}
              />
              <FloatingInput
                inputLabel={t('authentication.passwordInputLabel')}
                inputType={'password'}
                onChange={authenticationStore.fieldChange}
                name={'password'}
                value={authenticationStore.inputValues.password}
              />
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
        <style jsx>{indexStyles}</style>
      </div>
    )
  }
}
