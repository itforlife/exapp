import * as React from 'react';
import { ChangePassword } from '@partials/account-dashboard/ChangePassword';
import { DashBoardHeader } from '@partials/account-dashboard/DashboardHeader';
import { PersonalInformation } from '@partials/account-dashboard/PersonalInformation';
import { YourProfile } from '@partials/account-dashboard/YourProfile';
import { labels } from '@i18n/en_EN';

interface IAccountDashboardProps {
    settingsComponent: string;
    labels: typeof labels;
}
class AccountDashBoard extends React.Component<IAccountDashboardProps> {
    public getSettingsComponent = () => {
        const componentName = this.props.settingsComponent;
        switch (componentName) {
            case 'changePassword':
                return <ChangePassword labels={this.props.labels} />;
            case 'personalInformation':
                return <PersonalInformation labels={this.props.labels} />;
            default:
                return <PersonalInformation labels={this.props.labels} />;
        }
    };

    public render() {
        return (
            <div>
                <DashBoardHeader labels={this.props.labels} />
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-9 order-lg-2 order-md-1 col-12">
                            <div>{this.getSettingsComponent()}</div>
                        </div>

                        <div className="col col-lg-3 order-lg-1 order-md-2 col-12">
                            <div>
                                <YourProfile labels={this.props.labels} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountDashBoard;
