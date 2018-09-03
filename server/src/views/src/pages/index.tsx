import React from 'react'
import { AuthenticationComponent } from '../modules/authentication/authenticationComponent'
import { Button } from '../modules/elements'
import { container, IInjectedProps } from '../utils/decorators'

const LandingPage = container(
    class extends React.Component<IInjectedProps> {
        public render() {
            const { t, appStore } = this.props
            const { userStore } = appStore
            return (
                <div>
                    <div>
                        <div />
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div>
                                        <h1> {t('index.mainCallToAction')}</h1>
                                        <Button
                                            className="btn btn-md"
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
