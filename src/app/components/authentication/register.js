
import React from 'react'
import { observer, inject } from 'mobx-react';
import { FloatingInput } from '../floatingInput';
import { Checkbox } from '../checkbox';

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
                                <div className="form-group date-time-picker label-floating">
                                    <label className="control-label">Your Birthday</label>
                                    <input name="datetimepicker"  />
                                    <span className="input-group-addon">
                                        <svg className="olymp-calendar-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
                                    </span>
                                </div>
    
                                
                                <div className="remember">
                                    <Checkbox name={'optionsCheckboxes'} label={'Remember Me'}/> 
                                </div>
        
                                <a href="#" 
                                    className="btn btn-purple btn-lg full-width" 
                                    onClick={this.onCompleteRegistration}
                                >
                                    Complete Registration!
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
        )
    }
}