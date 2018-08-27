import React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import { Button, Checkbox, FloatingInput } from '../elements'
import * as registerStyles from './register.scss'

export const Register = container(
    class extends React.Component<IInjectedProps> {
        public onCompleteRegistration = async () => {
            const { appStore } = this.props
            const userStore = appStore.userStore

            await userStore.createUser()
        }
        public render() {
            const { appStore, t } = this.props
            const userStore = appStore.userStore
            const formStore = userStore.registerForm

            return (
                <div>
                    <div className={`${registerStyles.registerTitle} h6`}>
                        {t('authentication.registerTitle')}
                    </div>
                    <form className={registerStyles.registerContent}>
                        <div className="row">
                            <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <FloatingInput
                                    {...formStore.$('firstName').bind({
                                        label: t(
                                            'authentication.firstNameInputLabel'
                                        ),
                                    })}
                                />
                            </div>
                            <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <FloatingInput
                                    {...formStore.$('lastName').bind({
                                        label: t(
                                            'authentication.lastNameInputLabel'
                                        ),
                                    })}
                                />
                            </div>
                            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <FloatingInput
                                    {...formStore.$('email').bind({
                                        type: 'email',
                                        label: t(
                                            'authentication.mailInputLabel'
                                        ),
                                    })}
                                />
                                <FloatingInput
                                    {...formStore.$('password').bind({
                                        type: 'password',
                                        label: t(
                                            'authentication.passwordInputLabel'
                                        ),
                                    })}
                                />
                                <div
                                    className={registerStyles.registerRemember}
                                >
                                    <Checkbox
                                        name={'optionsCheckboxes'}
                                        label={t(
                                            'authentication.termsAndConditionsText'
                                        )}
                                    />
                                </div>
                                <Button
                                    className="btn btn-purple btn-lg full-width"
                                    onClick={this.onCompleteRegistration}
                                >
                                    {t('authentication.registerButtonText')}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
)
