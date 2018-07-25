import React from 'react'
import { FloatingInput, Checkbox, Button } from '../elements'
import { registerStyles } from './register.css'
import { comp, IInjectedProps } from '../../utils/decorators'

export const Register = comp(
  class extends React.Component<IInjectedProps> {
    get injectedProps() {
      return this.props as IInjectedProps
    }
    onCompleteRegistration = async () => {
      const { appStore, router } = this.injectedProps
      const authenticationStore = appStore.authenticationStore

      await authenticationStore.createUser()
      if (authenticationStore.isUserLogedIn) {
        router.push('/home-page')
      }
    }
    render() {
      const { appStore, t } = this.injectedProps
      const authenticationStore = appStore.authenticationStore
      const formStore = authenticationStore.registerForm

      return (
        <div>
          <div className="title h6">{t('authentication.registerTitle')}</div>
          <form className="content">
            <div className="row">
              <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <FloatingInput
                  {...formStore.$('firstName').bind({
                    label: t('authentication.firstNameInputLabel'),
                  })}
                />
              </div>
              <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <FloatingInput
                  {...formStore.$('lastName').bind({
                    label: t('authentication.lastNameInputLabel'),
                  })}
                />
              </div>
              <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <FloatingInput
                  {...formStore.$('email').bind({
                    type: 'email',
                    label: t('authentication.mailInputLabel'),
                  })}
                />
                <FloatingInput
                  {...formStore.$('password').bind({
                    type: 'password',
                    label: t('authentication.passwordInputLabel'),
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
          <style jsx>{registerStyles}</style>
        </div>
      )
    }
  }
)
