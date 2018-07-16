import React from 'react'
import { observer, inject } from 'mobx-react'
import { translate } from 'react-i18next'
import { FloatingInput, Checkbox, Button } from '../elements'
import { indexStyles } from './index.css'

@inject('appStore', 'router')
@translate(['data'])
@observer
export class Register extends React.Component {
  onCompleteRegistration = async () => {
    const authenticationStore = this.props.appStore.authenticationStore

    await authenticationStore.createUser()
    if (authenticationStore.isUserLogedIn) {
      this.props.router.push('/home-page')
    }
  }
  render() {
    const authenticationStore = this.props.appStore.authenticationStore
    const { t } = this.props
    return (
      <div>
        <div className="title h6">{t('authentication.registerTitle')}</div>
        <form className="content">
          <div className="row">
            <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <FloatingInput
                inputLabel={t('authentication.firstNameInputLabel')}
                onChange={authenticationStore.fieldChange}
                name={'firstName'}
                value={authenticationStore.inputValues.firstName}
              />
            </div>
            <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <FloatingInput
                inputLabel={t('authentication.lastNameInputLabel')}
                onChange={authenticationStore.fieldChange}
                name={'lastName'}
                value={authenticationStore.inputValues.lastName}
              />
            </div>
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
                  label={t('authentication.termsAndConditionsText')}
                />
              </div>
              <Button
                className="btn btn-purple btn-lg full-width"
                onClick={this.onCompleteRegistration}
              >
                {t('authentication.registerButtonText')}
              </Button>
            </div>
          </div>
        </form>
        <style jsx>{indexStyles}</style>
      </div>
    )
  }
}
