import * as React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'

export const DashBoardHeader = container(
    class extends React.Component<IInjectedProps> {
        public render() {
            const { t } = this.props

            return (
                <div>
                    <div>styles.bgAccount</div>
                    <div className="container">
                        <div className="row">
                            <div className="col m-auto col-md-8 col-12">
                                <div>
                                    <h1>{t('accountDashboard.headerTitle')}</h1>
                                    <p>{t('accountDashboard.headerContent')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="static/assets/img/account-bottom.png"
                        alt="friends"
                    />
                </div>
            )
        }
    }
)
