import * as React from 'react';
import { Button, Checkbox, FloatingInput } from '@elements/index';
import { labels } from '@i18n/en_EN';
import { User } from '@entities/User';

interface IRegisterProps {
    labels: typeof labels;
    user?: User;
    generalError?: string;
    errors?: { [k:string]: string }
}

export const Register: React.SFC<IRegisterProps> = ({ labels, user, errors, generalError }: IRegisterProps) => {
        return (
            <div data-controller="ajaxForm">
                <div>{ generalError }</div>
                <div>{labels.authentication.registerTitle}</div>
                <form action="/auth/register" data-controller="actionConfirmation"  data-actionConfirmation-text="Really?">
                    <div className="row">
                        <div className="col col-12 col-md-6">
                            <FloatingInput
                                name="firstName"
                                value={user.firstName}
                                data-target="ajaxForm.field"
                                label={
                                    labels.authentication.firstNameInputLabel
                                }
                            />
                            <p>{errors.firstName}</p>
                        </div>
                        <div className="col col-12 col-md-6">
                            <FloatingInput
                                name="lastName"
                                value={user.lastName}
                                data-target="ajaxForm.field"
                                label={labels.authentication.lastNameInputLabel}
                            />
                            <p>{errors.lastName}</p>
                        </div>
                        <div className="col col-12">
                            <FloatingInput
                                name="email"
                                type="email"
                                value={user.email}
                                data-target="ajaxForm.field"
                                label={labels.authentication.mailInputLabel}
                            />
                            <p>{errors.email}</p>

                            <FloatingInput
                                type="password"
                                name="password"
                                value=""
                                data-target="ajaxForm.field"
                                label={labels.authentication.passwordInputLabel}
                            />
                            <p>{errors.password}</p>
                            <div>
                                <Checkbox
                                    name={'optionsCheckboxes'}
                                    label={
                                        labels.authentication
                                            .termsAndConditionsText
                                    }
                                />
                            </div>
                            <Button data-action="ajaxForm#submit actionConfirmation#confirm"  className="btn btn-lg">
                                {labels.authentication.registerButtonText}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        );
}

Register.defaultProps = {
    user: new User(),
    errors: {}
}