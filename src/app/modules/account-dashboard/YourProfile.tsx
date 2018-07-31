import React from 'react'
import { comp, IInjectedProps } from '../../utils/decorators';
import { settingsComponentType } from './accountDashboardStore';
import { yourProfileStyle } from './yourProfile.css'

export class YouProfileClass extends React.Component<IInjectedProps> {
    get injectedProps() {
        return this.props as IInjectedProps
      }
    public changeSettingsComponent = (componentName: settingsComponentType) => {
        const { appStore } = this.injectedProps;
        const { accountDashboardStore } = appStore;
        return () => accountDashboardStore.changeSettingsComponent(componentName);
    }
    public render() {
        const { t } = this.injectedProps;

        return (
            <div className="your-profile">
                <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">{t('accountDashboard.yourProfile')}</h6>
                </div>
                <div role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab">
                            <h6 className="mb-0">
                                <a
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    {t('accountDashboard.profileSettings')}
                                    <svg className="olymp-dropdown-arrow-icon">
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
                            <ul className="your-profile-menu">
                                <li>
                                    <a onClick={this.changeSettingsComponent('personalInformation')}> {t('accountDashboard.personalInformation')}</a>
                                </li>
                                <li>
                                    <a onClick={this.changeSettingsComponent('changePassword')}>{t('accountDashboard.changePassword')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <style jsx={true}>{yourProfileStyle}</style>
            </div>
        )
    }
}

export const YourProfile = comp(YouProfileClass);