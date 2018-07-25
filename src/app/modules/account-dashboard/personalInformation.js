import React from 'react';
import { personalInformationStyle } from './personalInformation.css';
import { FloatingInput } from '../elements/floatingInput';
import { observer, inject } from 'mobx-react'
import { translate } from 'react-i18next'

@inject('appStore')
@translate(['data'])
@observer
export class PersonalInformation extends React.Component {

    render() {
        const { t, appStore } = this.props;
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
                        </div>
                    </form>
                </div>
            </div>
        )  
    }
}