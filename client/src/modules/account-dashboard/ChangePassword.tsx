import React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import { Button } from '../elements/button'
import { FloatingInput } from '../elements/floatingInput'
import { Content } from './Content'

class ChangePasswordClass extends React.Component<IInjectedProps> {
    public render() {
        const { t, appStore } = this.props
        const { accountDashboardStore } = appStore
        const formStore = accountDashboardStore.profileInformationForm
        return (
            <Content title={t('accountDashboard.changePassword')}>
                <form>
                    <div className="row">
                        <div className="col col-md-6 col-12">
                            <FloatingInput
                                {...formStore.$('email').bind({
                                    type: 'email',
                                    label: t('authentication.mailInputLabel'),
                                })}
                            />
                            <FloatingInput
                                {...formStore.$('newPassword').bind({
                                    label: t('authentication.newPassword'),
                                    type: 'password',
                                })}
                            />
                        </div>
                        <div className="col col-md-6 col-12">
                            <FloatingInput
                                {...formStore.$('password').bind({
                                    label: t('authentication.currentPassword'),
                                    type: 'password',
                                })}
                            />
                            <FloatingInput
                                {...formStore.$('confirmPassword').bind({
                                    label: t('authentication.confirmPassword'),
                                    type: 'password',
                                })}
                            />
                        </div>
                        <div className="col col-12">
                            <Button
                                className="btn btn-primary btn-lg"
                                onClick={accountDashboardStore.changePassword}
                            >
                                Change password
                            </Button>
                        </div>
                    </div>
                </form>
            </Content>
        )
    }
}

export const ChangePassword = container(ChangePasswordClass)
