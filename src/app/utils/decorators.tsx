import { inject, observer } from 'mobx-react'
import { RouterProps, withRouter } from 'next/router'
import * as React from 'react'
import { translate } from 'react-i18next'
import ApplicationStore from '../modules/layout/ApplicationStore'

export interface IInjectedProps {
    appStore: typeof ApplicationStore
    router: RouterProps
    t: (strPath: string) => string
}
export const comp = <P extends IInjectedProps>(
    Comp: React.ComponentType<P>
) => {
    return withRouter(translate(['data'])(inject('appStore')(observer(Comp))))
}
