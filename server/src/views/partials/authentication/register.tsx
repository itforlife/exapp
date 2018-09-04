import * as React from 'react';
import { Button, Checkbox, FloatingInput } from '@elements/index';
import { labels } from '@i18n/en_EN';

interface IRegisterProps {
    labels: typeof labels;
}

export class Register extends React.Component<IRegisterProps> {
    public render() {
        const { labels } = this.props;
        return (
            <div>
                <div>{labels.authentication.registerTitle}</div>
                <form>
                    <div className="row">
                        <div className="col col-12 col-md-6">
                            <FloatingInput
                                name="firstName"
                                label={
                                    labels.authentication.firstNameInputLabel
                                }
                            />
                        </div>
                        <div className="col col-12 col-md-6">
                            <FloatingInput
                                name="lastName"
                                label={labels.authentication.lastNameInputLabel}
                            />
                        </div>
                        <div className="col col-12">
                            <FloatingInput
                                name="email"
                                type="email"
                                label={labels.authentication.mailInputLabel}
                            />
                            <FloatingInput
                                type="password"
                                label={labels.authentication.passwordInputLabel}
                            />
                            <div>
                                <Checkbox
                                    name={'optionsCheckboxes'}
                                    label={
                                        labels.authentication
                                            .termsAndConditionsText
                                    }
                                />
                            </div>
                            <Button className="btn btn-lg">
                                {labels.authentication.registerButtonText}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
