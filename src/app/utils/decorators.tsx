import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { translate } from 'react-i18next'
import ApplicationStore from '../modules/layout/ApplicationStore'
import { RouterProps, withRouter } from 'next/router'

export interface IInjectedProps {
  appStore: typeof ApplicationStore
  router: RouterProps
  t: (strPath: string) => string
}
export const comp = <P extends IInjectedProps>(
  Comp: React.ComponentType<P>
) => {
  const fn = (props: P) => {
    return (
      <Comp
        appStore={props.appStore}
        router={props.router}
        t={props.t}
        {...props}
      />
    )
  }
  return withRouter(observer(inject('appStore')(translate(['data'])(fn))))
}
