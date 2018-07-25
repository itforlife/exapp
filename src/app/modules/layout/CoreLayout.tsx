import * as React from 'react'
import { I18nextProvider } from 'react-i18next'
import { i18n } from '../../i18n'
import { Provider } from 'mobx-react'
import ApplicationStore from './ApplicationStore'
import '../../static/assets/css/fonts.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import { i18n as Intl } from 'i18next'

export class CoreLayout extends React.Component {
  i18n: Intl
  appStore: typeof ApplicationStore
  constructor(props) {
    super(props)
    this.i18n = i18n
    this.appStore = ApplicationStore
  }
  render() {
    const { children } = this.props
    return (
      <Provider appStore={this.appStore}>
        <I18nextProvider i18n={this.i18n}>{children}</I18nextProvider>
      </Provider>
    )
  }
}
