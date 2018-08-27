import * as React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import * as styles from './dashBoardHeader.scss'

export const DashBoardHeader = container(
    class extends React.Component<IInjectedProps> {
        public render() {
            const { t } = this.props

            return (
                <div className={styles.mainHeader}>
                    <div
                        className={`${styles.contentBgWrap} ${
                            styles.bgAccount
                        }`}
                    />
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                                <div className={styles.mainHeaderContent}>
                                    <h1>{t('accountDashboard.headerTitle')}</h1>
                                    <p>{t('accountDashboard.headerContent')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className={styles.imgBottom}
                        src="static/assets/img/account-bottom.png"
                        alt="friends"
                    />
                </div>
            )
        }
    }
)
