import React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import { Footer, Header } from '.'

class AuthenticatedUserPageLayoutCmp extends React.Component<IInjectedProps> {
    public render() {
        const { appStore } = this.props
        const authenticatedMarkup = (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
        const loadingMarkup = <div>Loading...</div>

        return appStore.userStore.currentUser
            ? authenticatedMarkup
            : loadingMarkup
    }
}

export const AuthenticatedUserPageLayout = container(
    AuthenticatedUserPageLayoutCmp
)
