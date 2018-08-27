import * as React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import { dasBoardHeaderStyle } from './dashBoardHeader.css'

export const DashBoardHeader = container(
    class extends React.Component<IInjectedProps> {
        public render() {
            const { t } = this.props

            return (
                <div className="main-header">
                    <div className="content-bg-wrap bg-account" />
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                                <div className="main-header-content">
                                    <h1>{t('accountDashboard.headerTitle')}</h1>
                                    <p>{t('accountDashboard.headerContent')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="img-bottom"
                        src="static/assets/img/account-bottom.png"
                        alt="friends"
                    />
                    <style jsx={true}>{dasBoardHeaderStyle}</style>
                </div>
            )
        }
    }
)
