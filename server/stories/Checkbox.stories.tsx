import * as React from 'react';
import { Checkbox } from '@elements/Checkbox';
import { storiesOf } from '@storybook/react';

class ControlledCheckbox extends React.Component<any> {
    private checked: boolean = true;
    public handleCheck = () => {
        this.checked = !this.checked;
    };
    public render() {
        return <Checkbox label="Test" checked={this.checked} />;
    }
}

storiesOf('Checkbox', module)
    .add('Uncontrolled checkbox', () => <Checkbox label="Test" />)
    .add('Uncontrolled checkbox with initial checked value', () => (
        <Checkbox label="Test" checked={true} />
    ))
    .add('Controlled checkbox', () => <ControlledCheckbox label="Test" />);
