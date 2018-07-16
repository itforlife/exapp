import React, { Component } from 'react'
import { I18nextProvider } from 'react-i18next'
import { i18n } from '../../i18n'
import { Provider, observer } from 'mobx-react'
import ApplicationStore from './ApplicationStore'
import { withRouter } from 'next/router'

@withRouter
@observer
export class CoreLayout extends Component {
  constructor(props) {
    super(props)
    this.i18n = i18n
    this.appStore = ApplicationStore
  }
  render() {
    const { children, lng, resources, ...props } = this.props
    return (
      <Provider appStore={this.appStore} router={this.props.router}>
        <I18nextProvider i18n={this.i18n}>{children}</I18nextProvider>
      </Provider>
    )
  }
}
