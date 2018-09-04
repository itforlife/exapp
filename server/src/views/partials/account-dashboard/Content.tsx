import * as React from 'react';

export interface ISettingsPage {
    title: string;
}

export class Content extends React.Component<ISettingsPage> {
    public render() {
        return (
            <div>
                <div>
                    <h6>{this.props.title}</h6>
                </div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
