import React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import * as styles from './content.scss'

export interface ISettingsPage extends IInjectedProps {
    title: string
}

class ContentClass extends React.Component<ISettingsPage> {
    public render() {
        return (
            <div>
                <div className={styles.uiBlockTitle}>
                    <h6 className={styles.title}>{this.props.title}</h6>
                </div>
                <div className={styles.uiBlockContent}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export const Content = container(ContentClass)
