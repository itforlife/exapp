import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { Dropdown } from '../src/modules/elements'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]

const logger = () => {
    // tslint:disable-next-line:no-console
    console.log('action')
}

@observer
class ControlledDropdown extends React.Component<any> {
    @observable
    private value: string = ''
    public handleChange = (value: string) => {
        this.value = value
    }
    public render() {
        return (
            <Dropdown
                name="test"
                placeholder="test"
                options={options}
                className="bla"
                value={this.value}
                onChange={this.handleChange}
            />
        )
    }
}

storiesOf('Dropdown', module)
    .add('Uncontrolled Dropdown', () => (
        <Dropdown
            name="test"
            placeholder="test"
            options={options}
            className="bla"
            onChange={logger}
        />
    ))

    .add('Uncontrolled Dropdown with initial value', () => (
        <Dropdown
            name="test"
            placeholder="test"
            options={options}
            className="bla"
            onChange={logger}
            defaultValue={{ value: 'strawberry', label: 'Strawberry' }}
        />
    ))
    .add('Controlled Dropdown', () => <ControlledDropdown />)
