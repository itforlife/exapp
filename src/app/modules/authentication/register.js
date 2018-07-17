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
    const authenticationStore = this.props.appStore.authenticationStore;

    await authenticationStore.createUser();
    if (authenticationStore.isUserLogedIn) {
      this.props.router.push('/home-page');
    }
  }
  render() {
    const authenticationStore = this.props.appStore.authenticationStore;
    const formStore = authenticationStore.registerForm;

    const { t } = this.props
    return (
      <div>
        <div className="title h6">{t('authentication.registerTitle')}</div>
        <form className="content">
          <div className="row">
            <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <FloatingInput
                {...formStore.$('firstName').bind({
                  placeholder: t('authentication.firstNameInputLabel'),
                  label: t('authentication.firstNameInputLabel')
                })}
              />
            </div>
            <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <FloatingInput
                {...formStore.$('lastName').bind({
                  placeholder: t('authentication.lastNameInputLabel'),
                  label: t('authentication.lastNameInputLabel')
                })}
              />
            </div>
            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <FloatingInput
                {...formStore.$('email').bind({
                                              type: 'email',
                                              placeholder: t('authentication.mailInputLabel'),
                                              label: t('authentication.mailInputLabel')
                                            })}
              />
              <FloatingInput
                {...formStore.$('password').bind({
                                                  type: 'password',
                                                  placeholder: t('authentication.passwordInputLabel'),
                                                  label: t('authentication.passwordInputLabel')
                                                })}
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
