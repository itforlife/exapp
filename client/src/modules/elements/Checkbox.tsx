import * as React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

export interface IProps {
    name?: string
    label: string
    initialChecked?: boolean
    checked?: boolean
    onCheck?(): void
}

@observer
export class Checkbox extends React.Component<IProps> {
    @observable
    private isChecked: boolean

    public handleClick = () => {
        this.isChecked = !this.isChecked

        if (this.props.onCheck) {
            this.props.onCheck()
        }
    }

    public componentDidMount() {
        this.isChecked = this.props.initialChecked
    }

    public render() {
        const { label, name } = this.props

        const checked =
            this.props.checked !== undefined
                ? this.props.checked
                : this.isChecked

        return (
            <div>
                <label>
                    <input type="checkbox" name={name} />
                    <span onClick={this.handleClick}>
                        <span>{checked}</span>
                    </span>
                    {label}
                </label>
            </div>
        )
    }
}
