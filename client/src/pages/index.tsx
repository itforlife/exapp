import React from 'react'
import { withRouteData } from 'react-static'
import { AuthenticationComponent } from '../modules/authentication/authenticationComponent'
import { Button } from '../modules/elements'

import { comp, IInjectedProps } from '../utils/decorators'
import { indexStyles } from './index.css'

const LandingPage = comp(
    class extends React.Component<IInjectedProps> {
        get injectedProps() {
            return this.props as IInjectedProps
        }
        public render() {
            const { t, appStore } = this.injectedProps
            const { userStore } = appStore
            return (
                <div className="landing-page">
                    <div className="content-bg-wrap">
                        <div className="header-spacer--standard" />
                        <div className="container">
                            <div className="row display-flex">
                                <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="landing-content">
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
                    <style jsx={true}>{indexStyles}</style>
                </div>
            )
        }
    }
)

export default withRouteData(LandingPage)
