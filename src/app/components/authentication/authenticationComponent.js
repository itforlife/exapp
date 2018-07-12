import React from 'react'
import { observer, inject } from 'mobx-react';
import { LogIn } from './logIn';
import { Register } from './register';
import classnames from 'classnames';

@inject('exappStore')
@observer
export class AuthenticationComponent extends React.Component{
    render() {
        const authenticationStore = this.props.exappStore.authenticationStore;
        const loginActiveClassName = classnames(
            {
                active: authenticationStore.isLoginFormActive
            }
        );
        const registerActiveClassName = classnames(
            {
                active: authenticationStore.isRegisterFormActive
            }
        );
        return (
            <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="registration-login-form">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className={`nav-link inline-items ${loginActiveClassName}`} role="tab" onClick={authenticationStore.setLoginFormActive}>
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link inline-items ${registerActiveClassName}`} role="tab" onClick={authenticationStore.setRegisterFormActive}>
                                Register
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className={`tab-pane ${loginActiveClassName}`} >
                            <LogIn />
                        </div>
                        <div className={`tab-pane ${registerActiveClassName}`} >
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
