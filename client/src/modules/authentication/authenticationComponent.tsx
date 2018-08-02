import classnames from 'classnames'
import { autorun } from 'mobx'
import * as React from 'react'
import { comp, IInjectedProps } from '../../utils/decorators'
import * as indexStyles from './index.css'
import { LogIn } from './logIn'
import { Register } from './register'

class AuthenticationComponentCls extends React.Component<IInjectedProps> {
    constructor(props: IInjectedProps) {
        super(props)
        const { userStore } = this.props.appStore
        autorun(() => {
            const currentUser = userStore.currentUser
            if (currentUser) {
                // this.props.router.push('/account-dashboard')
            }
        })
    }
    public render() {
        const { t, appStore } = this.props
        const userStore = appStore.userStore
        const loginActiveClassName = classnames({
            active: userStore.isLoginFormActive,
        })
        const registerActiveClassName = classnames({
            active: userStore.isRegisterFormActive,
        })

        return (
            <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className={indexStyles.registrationLoginForm}>
                    <ul
                        className={`${
                            indexStyles.registrationLoginFormNavTabs
                        } nav nav-tabs`}
                        role="tablist"
                    >
                        <li
                            className={`${
                                indexStyles.registrationLoginFormNavItem
                            } nav-item`}
                        >
                            <a
                                className={`${
                                    indexStyles.registrationLoginFormNavLink
                                } nav-link inline-items ${loginActiveClassName}`}
                                role="tab"
                                onClick={userStore.setLoginFormActive}
                            >
                                {t('authentication.loginTab')}
                            </a>
                        </li>
                        <li
                            className={`${
                                indexStyles.registrationLoginFormNavItem
                            } nav-item`}
                        >
                            <a
                                className={`${
                                    indexStyles.registrationLoginFormNavLink
                                } nav-link inline-items ${registerActiveClassName}`}
                                role="tab"
                                onClick={userStore.setRegisterFormActive}
                            >
                                {t('authentication.registerTab')}
                            </a>
                        </li>
                    </ul>
                    <div
                        className={`${
                            indexStyles.registrationLoginFormTabContent
                        } tab-content`}
                    >
                        <div className={`tab-pane ${loginActiveClassName}`}>
                            <LogIn />
                        </div>
                        <div className={`tab-pane ${registerActiveClassName}`}>
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export const AuthenticationComponent = comp(AuthenticationComponentCls)
