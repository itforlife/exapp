import React from 'react'
// import { withRouteData } from 'react-static'
import { AuthenticationComponent } from '../modules/authentication/authenticationComponent'
import { Button } from '../modules/elements'

import { container, IInjectedProps } from '../utils/decorators'
import * as indexStyles from './index.css'

const LandingPage = container(
    class extends React.Component<IInjectedProps> {
        public render() {
            const { t, appStore } = this.props
            const { userStore } = appStore
            return (
                <div className={indexStyles.langindPage}>
                    <div className={indexStyles.contentBgWrap}>
                        <div className={indexStyles.headerSpacerStandard} />
                        <div className="container">
                            <div className={`row ${indexStyles.displayFlex}`}>
                                <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className={indexStyles.landingContent}>
                                        <h1> {t('index.mainCallToAction')}</h1>
                                        <Button
                                            className="btn btn-md btn-border c-white"
                                            onClick={
                                                userStore.setRegisterFormActive
                                            }
                                        >
                                            {t('index.joinUsButton')}
                                        </Button>
                                    </div>
                                </div>
                                <AuthenticationComponent />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
)

export default LandingPage
