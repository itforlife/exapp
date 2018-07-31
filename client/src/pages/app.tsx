import { computed } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import { AuthenticatedUserPageLayout } from '../modules/layout/AuthenticatedUserPageLayout'
import { CoreLayout } from '../modules/layout/CoreLayout'
import { LandingPageLayout } from '../modules/layout/LandingPageLayout'

import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

@observer
@hot(module)
export default class Exapp extends React.Component {
    @computed
    get pageLayout() {
        // Add here funky logic to determine what layout to use
        const currentRoute = '/'
        switch (currentRoute) {
            case '/':
                return LandingPageLayout
            default:
                return AuthenticatedUserPageLayout
        }
    }
    public render() {
        const PageLayout = this.pageLayout
        return (
            <CoreLayout>
                <PageLayout>
                    <Router>
                        <div>
                            <nav>
                                <Link exact={true} to="/">
                                    Home
                                </Link>
                                <Link to="/about">About</Link>
                                <Link to="/blog">Blog</Link>
                            </nav>
                            <div className="content">
                                <Routes />
                            </div>
                        </div>
                    </Router>
                </PageLayout>
            </CoreLayout>
        )
    }
}
