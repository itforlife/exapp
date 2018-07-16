import React, { Component } from 'react'
import { I18nextProvider } from 'react-i18next'
import { initLang } from '../../i18n'
import { Provider, observer } from 'mobx-react'
import ApplicationStore from './ApplicationStore'

@observer
export class CoreLayout extends Component {
  constructor(props) {
    super(props)
    this.i18n = initLang(this.props.lng, this.props.resources)
    console.log(this.props.resources)
    this.appStore = ApplicationStore
  }
  render() {
    const { children, lng, resources, ...props } = this.props
    // console.log(lng, resources, props)
    return (
      <Provider appStore={this.appStore} router={this.props.router}>
        <I18nextProvider i18n={this.i18n}>{children}</I18nextProvider>
      </Provider>
    )
  }
}
