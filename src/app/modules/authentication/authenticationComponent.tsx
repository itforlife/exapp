import * as React from 'react'
import { LogIn } from './logIn'
import { Register } from './register'
import classnames from 'classnames'
import { indexStyles } from './index.css'
import { comp, IInjectedProps } from '../../utils/decorators'

interface IAuthenticationComponentProps extends IInjectedProps {
  x: string
}

class AuthenticationComponentCls extends React.Component<
  IAuthenticationComponentProps
> {
  constructor(props: IAuthenticationComponentProps) {
    super(props)
  }
  get injectedProps() {
    return this.props as IInjectedProps
  }
  render() {
    const { t, appStore } = this.injectedProps
    console.log(appStore.authenticationStore.createUser())
    const authenticationStore = appStore.authenticationStore
    const loginActiveClassName = classnames({
      active: authenticationStore.isLoginFormActive,
    })
    const registerActiveClassName = classnames({
      active: authenticationStore.isRegisterFormActive,
    })

    return (
      <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="registration-login-form">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className={`nav-link inline-items ${loginActiveClassName}`}
                role="tab"
                onClick={authenticationStore.setLoginFormActive}
              >
                {t('authentication.loginTab')}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inline-items ${registerActiveClassName}`}
                role="tab"
                onClick={authenticationStore.setRegisterFormActive}
              >
                {t('authentication.registerTab')}
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className={`tab-pane ${loginActiveClassName}`}>
              <LogIn />
            </div>
            <div className={`tab-pane ${registerActiveClassName}`}>
              <Register />
            </div>
          </div>
        </div>
        <style jsx>{indexStyles}</style>
      </div>
    )
  }
}

export const AuthenticationComponent = comp(AuthenticationComponentCls)
