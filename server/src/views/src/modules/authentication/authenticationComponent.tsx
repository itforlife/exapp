import { autorun } from 'mobx'
import * as React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import { LogIn } from './logIn'
import { Register } from './register'

class AuthenticationComponentCls extends React.Component<IInjectedProps> {
    constructor(props: IInjectedProps) {
        super(props)
        const { userStore } = this.props.appStore
        autorun(() => {
            const currentUser = userStore.currentUser
            if (currentUser) {
                this.props.history.push('/account-dashboard')
            }
        })
    }
    public render() {
        const { t, appStore } = this.props
        const userStore = appStore.userStore

        return (
            <div className="col col-xl-5 col-lg-6 col-12">
                <div>
                    <ul>
                        <li>
                            <a onClick={userStore.setLoginFormActive}>
                                {t('authentication.loginTab')}
                            </a>
                        </li>
                        <li>
                            <a onClick={userStore.setRegisterFormActive}>
                                {t('authentication.registerTab')}
                            </a>
                        </li>
                    </ul>
                    <div>
                        <div>
                            <LogIn />
                        </div>
                        <div>
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export const AuthenticationComponent = container(AuthenticationComponentCls)
