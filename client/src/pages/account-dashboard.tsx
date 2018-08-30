import React from 'react'
import { ChangePassword } from '../modules/account-dashboard/ChangePassword'
import { DashBoardHeader } from '../modules/account-dashboard/DashBoardHeader'
import { PersonalInformation } from '../modules/account-dashboard/PersonalInformation'
import { YourProfile } from '../modules/account-dashboard/YourProfile'
import { container, IInjectedProps } from '../utils/decorators'

class AccountDashBoard extends React.Component<IInjectedProps> {
    public getSettingsComponent = () => {
        const componentName = this.props.appStore.accountDashboardStore
            .settingsComponent
        switch (componentName) {
            case 'changePassword':
                return <ChangePassword />
            case 'personalInformation':
                return <PersonalInformation />
            default:
                return <PersonalInformation />
        }
    }

    public render() {
        return (
            <div>
                <DashBoardHeader />
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-9 order-lg-2 order-md-1 col-12">
                            <div>{this.getSettingsComponent()}</div>
                        </div>

                        <div className="col col-lg-3 order-lg-1 order-md-2 col-12">
                            <div>
                                <YourProfile />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default container(AccountDashBoard)
