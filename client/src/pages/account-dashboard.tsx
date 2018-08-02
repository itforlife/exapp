import React from 'react';
import { ChangePassword } from '../modules/account-dashboard/ChangePassword';
import { DashBoardHeader } from '../modules/account-dashboard/DashBoardHeader';
import { PersonalInformation } from '../modules/account-dashboard/PersonalInformation';
import { YourProfile } from '../modules/account-dashboard/YourProfile';
import { comp, IInjectedProps } from '../utils/decorators'
import { accountDashBoardStyle } from './accountDashboard.css';

class AccountDashBoard extends React.Component<IInjectedProps> {
    

    public getSettingsComponent = () => {
        const componentName = this.props.appStore.accountDashboardStore.settingsComponent;
        switch(componentName) {
            case 'changePassword': 
                return <ChangePassword />;
            case 'personalInformation':
                return <PersonalInformation />;
            default: 
                return <PersonalInformation />;
        }
    }

    public render() {
        return (
            <div>
                <DashBoardHeader />
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
                            <div className="ui-block">
                               {this.getSettingsComponent()}
                            </div>
                        </div>

                        <div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12  responsive-display-none">
                            <div className="ui-block">
                                <YourProfile />
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx={true}>{accountDashBoardStyle}</style>
            </div>
        )
    }
}

export default comp(AccountDashBoard);
