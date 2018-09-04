import * as React from 'react';
import { Button } from '@elements/button';
import { FloatingInput } from '@elements/FloatingInput';
import { Content } from './Content';
import { labels } from '@i18n/en_EN';

interface IPersonalInformationProps {
    labels: typeof labels;
}

export class PersonalInformation extends React.Component<
    IPersonalInformationProps
> {
    public render() {
        return (
            <Content title={labels.accountDashboard.personalInformation}>
                <form>
                    <div className="row">
                        <div className="col col-md-6 col-12">
                            <FloatingInput
                                name="firstName"
                                label={
                                    labels.authentication.firstNameInputLabel
                                }
                            />
                            <FloatingInput
                                name="birthday"
                                label={labels.authentication.birthdayInputlabel}
                            />
                        </div>
                        <div className="col col-md-6 col-12">
                            <FloatingInput
                                name="lastName"
                                label={labels.authentication.lastNameInputLabel}
                            />
                            <FloatingInput
                                name="phoneNumber"
                                label={
                                    labels.authentication.phoneNumberInputLabel
                                }
                            />
                        </div>
                        <div className="col col-md-6 col-12">
                            <Button className="btn btn-secondary btn-lg">
                                Cancel
                            </Button>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                            <Button className="btn btn-primary btn-lg">
                                Save all Changes
                            </Button>
                        </div>
                    </div>
                </form>
            </Content>
        );
    }
}
