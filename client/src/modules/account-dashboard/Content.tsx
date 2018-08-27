import React from 'react'
import { container, IInjectedProps } from '../../utils/decorators'
import './content.scss'

export interface ISettingsPage extends IInjectedProps {
    title: string
}

class ContentClass extends React.Component<ISettingsPage> {
    public render() {
        return (
            <div>
                <div className="ui-block-title">
                    <h6 className="title">{this.props.title}</h6>
                </div>
                <div className="ui-block-content">{this.props.children}</div>
            </div>
        )
    }
}

export const Content = container(ContentClass)
