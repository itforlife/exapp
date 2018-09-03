import React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'

export interface ISettingsPage extends IInjectedProps {
    title: string
}

class ContentClass extends React.Component<ISettingsPage> {
    public render() {
        return (
            <div>
                <div>
                    <h6>{this.props.title}</h6>
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export const Content = container(ContentClass)
