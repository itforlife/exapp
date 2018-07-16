
import React from 'react'
import { observer, inject } from 'mobx-react';
import { FloatingInput, Checkbox, Button } from '../elements';
import { indexStyles } from './index.css';

@inject('exappStore', 'router')
@observer
export class Register extends React.Component {
    
    onCompleteRegistration = async() => {
        const authenticationStore = this.props.exappStore.authenticationStore;

        await authenticationStore.createUser();
        if(authenticationStore.isUserLogedIn) {
            this.props.router.push('/home-page');
        }
    }
    render() {
        const authenticationStore = this.props.exappStore.authenticationStore;
        return (
                <div>
                    <div className="title h6">Register to Exapp</div>
                    <form className="content">
                        <div className="row">
                            <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <FloatingInput
                                    inputLabel={'First Name'}
                                    onChange={authenticationStore.fieldChange}
                                    name={'firstName'}
                                    value={authenticationStore.inputValues.firstName}
                                />
                            </div>
                            <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <FloatingInput
                                    inputLabel={'Last Name'}
                                    onChange={authenticationStore.fieldChange}
                                    name={'lastName'}
                                    value={authenticationStore.inputValues.lastName}
                                />
                            </div>
                            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <FloatingInput
                                    inputLabel={'Your Email'}
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
                                    <Checkbox name={'optionsCheckboxes'} label={'I Accept termin & conditions'}/> 
                                </div>
                                <Button 
                                    className="btn btn-purple btn-lg full-width" 
                                    onClick={this.onCompleteRegistration} 
                                >
                                    Complete Registration!
                                </Button>
    
                            </div>
                        </div>
                    </form>
                    <style jsx>{indexStyles}</style>

                </div>
        )
    }
}