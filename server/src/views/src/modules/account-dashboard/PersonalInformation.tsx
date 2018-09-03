import React from 'react';
import { container, IInjectedProps } from '../../utils/decorators';
import { Button } from '../elements/button';
import { FloatingInput } from '../elements/FloatingInput';
import { Content } from './Content';

class PersonalInformationClass extends React.Component<IInjectedProps> {
    public render() {
        const { t, appStore } = this.props;
        const { accountDashboardStore } = appStore;
        const formStore = accountDashboardStore.profileInformationForm;
        return (
            <Content title={t('accountDashboard.personalInformation')}>
                <form>
                    <div className="row">
                        <div className="col col-md-6 col-12">
                            <FloatingInput
                                {...formStore.$('firstName').bind({
                                    label: t(
                                        'authentication.firstNameInputLabel'
                                    ),
                                })}
                            />
                            <FloatingInput
                                {...formStore.$('birthday').bind({
                                    label: t(
                                        'authentication.birthdayInputlabel'
                                    ),
                                })}
                            />
                        </div>
                        <div className="col col-md-6 col-12">
                            <FloatingInput
                                {...formStore.$('lastName').bind({
                                    label: t(
                                        'authentication.lastNameInputLabel'
                                    ),
                                })}
                            />
                            <FloatingInput
                                {...formStore.$('phoneNumber').bind({
                                    label: t(
                                        'authentication.phoneNumberInputLabel'
                                    ),
                                })}
                            />
                        </div>
                        <div className="col col-md-6 col-12">
                            <Button
                                className="btn btn-secondary btn-lg"
                                onClick={accountDashboardStore.resetForm}
                            >
                                Cancel
                            </Button>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                            <Button
                                className="btn btn-primary btn-lg"
                                onClick={accountDashboardStore.updateUser}
                            >
                                Save all Changes
                                <div>ripple container</div>
                            </Button>
                        </div>
                    </div>
                </form>
            </Content>
        );
    }
}

export const PersonalInformation = container(PersonalInformationClass);
