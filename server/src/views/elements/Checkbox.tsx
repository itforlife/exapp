import * as React from 'react';

export interface IProps {
    name?: string;
    label: string;
    checked?: boolean;
}

export class Checkbox extends React.Component<IProps> {
    public render() {
        const { label, name, checked } = this.props;
        return (
            <div>
                <label>
                    <input type="checkbox" name={name} />
                    <span>
                        <span>{checked}</span>
                    </span>
                    {label}
                </label>
            </div>
        );
    }
}
