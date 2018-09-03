import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { translate } from 'react-i18next'
import { Diff } from 'utility-types'
import { withRouter } from 'react-router'
import ApplicationStore from '../modules/layout/ApplicationStore'

export interface IInjectedProps {
    appStore: typeof ApplicationStore
    history: any
    match: any
    location: any
    t: (strPath: string) => string
}
export const container = <P extends IInjectedProps>(
    Comp: React.ComponentType<P>
): React.ComponentType<Diff<P, IInjectedProps>> => {
    return translate(['data'])(inject('appStore')(withRouter(observer(Comp))))
}
