import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { translate } from 'react-i18next'
import { Diff } from 'utility-types'
import ApplicationStore from '../modules/layout/ApplicationStore'
import { withRouter  } from 'react-static'

export interface IInjectedProps {
    appStore: typeof ApplicationStore
    history: any
    match: any
    location: any
    t: (strPath: string) => string
}
export const comp = <P extends IInjectedProps>(
    Comp: React.ComponentType<P>
): React.ComponentType<Diff<P, IInjectedProps>> => {
    return translate(['data'])(inject('appStore')(withRouter(observer(Comp))))
}
