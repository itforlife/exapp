import * as React from 'react'
import * as checkboxStyle from './CheckboxStyle.scss'
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
            <div className={checkboxStyle.checkbox}>
                <label className={checkboxStyle.labelCls}>
                    <input
                        type="checkbox"
                        name={name}
                        className={checkboxStyle.optionsCheckboxes}
                    />
                    <span
                        className={checkboxStyle.checkboxMaterial}
                        onClick={this.handleClick}
                    >
                        <span
                            className={`${checkboxStyle.check} ${checked &&
                                checkboxStyle.checked}`}
                        />
                    </span>
                    {label}
                </label>
            </div>
        )
    }
}
