import { observer } from 'mobx-react'
import React from 'react'
import { DashBoardHeader } from '../modules/account-dashboard/dashBoardHeader'
import { PersonalInformation } from '../modules/account-dashboard/personalInformation'
import { YourProfile } from '../modules/account-dashboard/yourProfile'
import { accountDashBoardStyle } from './accountDashboard.css'

@observer
class AccountDashBoard extends React.Component {
    public render() {
        return (
            <div>
                <DashBoardHeader />
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
                            <div className={accountDashBoardStyle.uiBlock}>
                                <PersonalInformation />
                            </div>
                        </div>

                        <div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12  responsive-display-none">
                            <div className={accountDashBoardStyle.uiBlock}>
                                <YourProfile />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountDashBoard
