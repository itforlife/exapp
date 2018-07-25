import { Footer, Header } from './index'
import React from 'react';
import { inject } from 'mobx-react'
import {observer} from 'mobx-react';


@inject('appStore')
@observer
export class AuthenticatedUserPageLayout extends React.Component {

render() {
    const { appStore } = this.props;
    const authenticatedMarkup = (<div>
        <Header />
        {this.props.children}
        <Footer />
        </div>
    );
    const loadingMarkup = (<div>Loading...</div>)

    return appStore.authenticationStore.currentUser ? authenticatedMarkup : loadingMarkup
  }
}
