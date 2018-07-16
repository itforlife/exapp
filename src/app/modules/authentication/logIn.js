import React from 'react'
import { observer, inject } from 'mobx-react';
import { FloatingInput, Checkbox, Button } from '../elements';
import { indexStyles } from './index.css';

@inject('appStore', 'router')
@observer
export class LogIn extends React.Component{
    
    onSingIn = async() => {
        const authenticationStore = this.props.appStore.authenticationStore;

        await authenticationStore.signInEmail();
        if(authenticationStore.isUserLogedIn) {
            this.props.router.push('/home-page');
        }
    }
    onFacebookSignIn = async () => {
        const authenticationStore = this.props.appStore.authenticationStore;

        await authenticationStore.signInFacebook();
        if(authenticationStore.isUserLogedIn) {
            this.props.router.push('/home-page');
        }
    }
    onTwitterSignIn = async () => {
        const authenticationStore = this.props.appStore.authenticationStore;

        await authenticationStore.signInTwitter();
        if(authenticationStore.isUserLogedIn) {
            this.props.router.push('/home-page');
        }
    }
    render() {
        const authenticationStore = this.props.appStore.authenticationStore;

        return (
            <div>
                <div className="title h6">Login to your Account</div>
                <form className="content">
                    <div className="row">
                        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <FloatingInput
                                inputLabel={'email'}
                                inputType={'email'}
                                onChange={authenticationStore.fieldChange}
                                name={'email'}
                                value={authenticationStore.inputValues.email}
                            />
                            <FloatingInput
                                inputLabel={'Your Password'}
                                inputType={'password'}
                                onChange={authenticationStore.fieldChange}
                                name={'password'}
                                value={authenticationStore.inputValues.password}
                            />
                            <div className="remember">
                                <Checkbox name={'optionsCheckboxes'} label={'Remember Me'}/> 
                                <a href="#" className="forgot">Forgot my Password</a>
                            </div>
                            <Button className="btn btn-lg btn-primary full-width" onClick={this.onSingIn}>
                                Login
                            </Button>
                            <div className="or"></div>

                            <Button className="btn btn-lg bg-facebook full-width btn-icon-left" onClick={this.onFacebookSignIn}>
                                <i className="fab fa-facebook-f" aria-hidden="true"></i> Login with Facebook
                            </Button>
                            <Button className="btn btn-lg bg-twitter full-width btn-icon-left" onClick={this.onTwitterSignIn}>
                                <i className="fab fa-twitter" aria-hidden="true"></i> Login with Twitter
                            </Button>
                            <p>Don’t you have an account? <a href="#" onClick={authenticationStore.setRegisterFormActive}>Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>
                        </div>
                    </div>
                </form>
                <style jsx>{indexStyles}</style>

            </div>
        )
    }
}
