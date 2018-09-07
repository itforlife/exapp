import * as React from 'react';
import { labels } from '@i18n/en_EN';

interface IDashBoardHeaderProps {
    labels: typeof labels;
}
export class DashBoardHeader extends React.Component<IDashBoardHeaderProps> {
    public render() {
        return (
            <div>
                <div>Account management</div>
                <div className="container">
                    <div className="row">
                        <div className="col m-auto col-md-8 col-12">
                            <div>
                                <h1>{labels.accountDashboard.headerTitle}</h1>
                                <p>{labels.accountDashboard.headerContent}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="img/account-bottom.png" alt="friends" />
            </div>
        );
    }
}
