import classnames from 'classnames'
import {autorun} from 'mobx';
import * as React from 'react'
import { comp, IInjectedProps } from '../../utils/decorators'
import { indexStyles } from './index.css'
import { LogIn } from './logIn'
import { Register } from './register'

interface IAuthenticationComponentProps extends IInjectedProps {
    x: string
}

class AuthenticationComponentCls extends React.Component<
    IAuthenticationComponentProps
> {
  constructor(props: IAuthenticationComponentProps) {
    super(props)
    const {userStore} = this.props.appStore;
    autorun(() => {
        const currentUser = userStore.currentUser;
        if (currentUser) {
          this.props.router.push('/account-dashboard');
        }
    })
  }
  get injectedProps() {
    return this.props as IInjectedProps
  }
  public render() {
    const { t, appStore } = this.injectedProps
    const userStore = appStore.userStore
    const loginActiveClassName = classnames({
      active: userStore.isLoginFormActive,
    })
    const registerActiveClassName = classnames({
      active: userStore.isRegisterFormActive,
    })

        return (
            <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="registration-login-form">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a
                                className={`nav-link inline-items ${loginActiveClassName}`}
                                role="tab"
                                onClick={userStore.setLoginFormActive}
                            >
                                {t('authentication.loginTab')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link inline-items ${registerActiveClassName}`}
                                role="tab"
                                onClick={
                                    userStore.setRegisterFormActive
                                }
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
                <style jsx={true}>{indexStyles}</style>
            </div>
        )
    }
}

export const AuthenticationComponent = comp(AuthenticationComponentCls)
