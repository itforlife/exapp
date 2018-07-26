import React from 'react';
import { comp, IInjectedProps } from '../../utils/decorators'
import { Button } from '../elements/button';
import { FloatingInput } from '../elements/floatingInput';
import { personalInformationStyle } from './personalInformation.css';


class PersonalInformationClass extends React.Component<IInjectedProps> {
    get injectedProps() {
        return this.props as IInjectedProps
      }
    public render() {
        const { t, appStore } = this.injectedProps;
        const { accountDashboardStore } = appStore;
        const formStore = accountDashboardStore.profileInformationForm;
        return (
            <div> 
                <div className="ui-block-title">
                    <h6 className="title">Personal Information</h6>
                </div>
                <div className="ui-block-content">
                    <form>
                        <div className="row">
                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <FloatingInput
                                    {...formStore.$('firstName').bind({
                                    label: t('authentication.firstNameInputLabel')
                                    })}
                                />
                                <FloatingInput
                                    {...formStore.$('email').bind({
                                                                type: 'email',
                                                                label: t('authentication.mailInputLabel')
                                                                })}
                                />
                                <FloatingInput
                                    {...formStore.$('birthday').bind({
                                                                label: t('authentication.birthdayInputlabel')
                                                                })}
                                />
                            </div>
                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <FloatingInput
                                    {...formStore.$('lastName').bind({
                                    label: t('authentication.lastNameInputLabel')
                                    })}  
                                />
                                <FloatingInput
                                    {...formStore.$('phoneNumber').bind({
                                    label: t('authentication.phoneNumberInputLabel')
                                    })}  
                                />                             
                            </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <Button
                                        className="btn btn-secondary btn-lg full-width"
                                        onClick={accountDashboardStore.resetForm}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <Button
                                        className="btn btn-primary btn-lg full-width"
                                        onClick={accountDashboardStore.updateUser}
                                    >
                                        Save all Changes<div className="ripple-container" />                                
                                    </Button>
                                </div>
                        </div>
                    </form>
                </div>
                <style jsx={true}>{personalInformationStyle}</style>
            </div>
        )  
    }
}

export const PersonalInformation = comp(PersonalInformationClass)
