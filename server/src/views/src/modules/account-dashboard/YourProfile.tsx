import React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import { settingsComponentType } from './accountDashboardStore'

export class YouProfileClass extends React.Component<IInjectedProps> {
    public changeSettingsComponent = (componentName: settingsComponentType) => {
        const { appStore } = this.props
        const { accountDashboardStore } = appStore
        return () =>
            accountDashboardStore.changeSettingsComponent(componentName)
    }
    public render() {
        const { t } = this.props

        return (
            <div>
                <div>
                    <h6>{t('accountDashboard.yourProfile')}</h6>
                </div>
                <div>
                    <div>
                        <div>
                            <h6>
                                <a>
                                    {t('accountDashboard.profileSettings')}
                                    <svg>
                                        <use xlinkHref="#static/asstes/olymp-dropdown-arrow-icon" />
                                    </svg>
                                </a>
                            </h6>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a
                                        onClick={this.changeSettingsComponent(
                                            'personalInformation'
                                        )}
                                    >
                                        {' '}
                                        {t(
                                            'accountDashboard.personalInformation'
                                        )}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={this.changeSettingsComponent(
                                            'changePassword'
                                        )}
                                    >
                                        {t('accountDashboard.changePassword')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export const YourProfile = container(YouProfileClass)
