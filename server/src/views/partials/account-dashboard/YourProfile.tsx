import * as React from 'react';
// import { settingsComponentType } from './accountDashboardStore';
import { labels } from '@i18n/en_EN';

interface IYouProfileProps {
    labels: typeof labels;
}

export class YourProfile extends React.Component<IYouProfileProps> {
    public render() {
        return (
            <div>
                <div>
                    <h6>{labels.accountDashboard.yourProfile}</h6>
                </div>
                <div>
                    <div>
                        <div>
                            <h6>
                                <a href="/account-dashboard/settings">
                                    {labels.accountDashboard.profileSettings}
                                    <svg>
                                        <use xlinkHref="#static/asstes/olymp-dropdown-arrow-icon" />
                                    </svg>
                                </a>
                            </h6>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a  href="/account-dashboard/personal">
                                        {' '}
                                        {
                                            labels.accountDashboard
                                                .personalInformation
                                        }
                                    </a>
                                </li>
                                <li>
                                    <a  href="/account-dashboard/change-password">
                                        {labels.accountDashboard.changePassword}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
