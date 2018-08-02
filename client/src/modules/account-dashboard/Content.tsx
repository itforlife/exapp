import React from 'react';
import { comp, IInjectedProps } from '../../utils/decorators'
import { contentStyle } from './content.css';

export interface ISettingsPage extends IInjectedProps {
    title: string;
} 

class ContentClass extends React.Component<ISettingsPage> {
    public render() {
        return (
            <div> 
                <div className="ui-block-title">
                    <h6 className="title">{this.props.title}</h6>
                </div>
                <div className="ui-block-content">
                    {this.props.children}
                </div>
                <style jsx={true}>{contentStyle}</style>
            </div>
        )  
    }
}

export const Content = comp(ContentClass)
