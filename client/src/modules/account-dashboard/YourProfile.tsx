import React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import { settingsComponentType } from './accountDashboardStore'
import * as styles from './yourProfile.scss'

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
                <div
                    className={`${styles.uiBlockTitle} ${
                        styles.uiBlockTitleSmall
                    }`}
                >
                    <h6 className={styles.title}>
                        {t('accountDashboard.yourProfile')}
                    </h6>
                </div>
                <div role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className={styles.cardHeader} role="tab">
                            <h6 className="mb-0">
                                <a
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    {t('accountDashboard.profileSettings')}
                                    <svg
                                        className={
                                            styles.olympDropdownArrowIcon
                                        }
                                    >
                                        <use xlinkHref="#static/asstes/olymp-dropdown-arrow-icon" />
                                    </svg>
                                </a>
                            </h6>
                        </div>

                        <div
                            className="collapse show"
                            role="tabpanel"
                            aria-labelledby="headingOne"
                        >
                            <ul className={styles.yourProfileMenu}>
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
