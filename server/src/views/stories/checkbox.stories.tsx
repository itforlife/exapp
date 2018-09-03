import * as React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { storiesOf } from '@storybook/react'

import { Checkbox } from '../src/modules/elements/Checkbox'

@observer
class ControlledCheckbox extends React.Component<any> {
    @observable
    private checked: boolean = true
    public handleCheck = () => {
        this.checked = !this.checked
    }
    public render() {
        return (
            <Checkbox
                label="Test"
                checked={this.checked}
                onCheck={this.handleCheck}
            />
        )
    }
}

storiesOf('Checkbox', module)
    .add('Uncontrolled checkbox', () => <Checkbox label="Test" />)
    .add('Uncontrolled checkbox with initial checked value', () => (
        <Checkbox label="Test" initialChecked={true} />
    ))
    .add('Controlled checkbox', () => <ControlledCheckbox label="Test" />)
