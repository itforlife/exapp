import * as React from 'react';

export interface IProps {
    name?: string;
    label: string;
    checked?: boolean;
}

export class Checkbox extends React.Component<IProps> {
    public render() {
        const { label, ...rest } = this.props;
        return (
            <div>
                <label>
                    <input type="checkbox" {...rest} />
                    <span>
                        <span>{rest.checked}</span>
                    </span>
                    {label}
                </label>
            </div>
        );
    }
}
