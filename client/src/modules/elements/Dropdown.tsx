import * as React from 'react'
import Select from 'react-select'

export interface IOption {
    value: string
    label: string
}

export interface IProps {
    name: string
    value?: string
    placeholder: string
    options: IOption[]
    className?: string
    defaultValue?: IOption
    isDisabled?: boolean
    isSearchable?: boolean
    autoFocus?: boolean
    onChange(value: string): void
}

const customStyles = {
    option: (base, state) => ({
        ...base,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? '#FFF' : '#888da8',
        backgroundColor: state.isSelected ? '#ff5e3a' : '#FFF',
        padding: '10px 20px',
    }),
    control: base => ({
        ...base,
        borderColor: '#e6ecf5',
        backgroundColor: 'transparent',
        width: '100%',
        zIndex: '1',
        border: '1px solid #e6ecf5',
        borderRadius: '3px',
        padding: '13px',
        margin: '0 0 3px',
        float: 'none',
        lineHeight: '15px',
        fontSize: '14px',
        height: '50px',
    }),
    valueContainer: base => ({
        ...base,
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    menu: base => ({
        ...base,
        marginTop: '2px',
    }),
}

export const Dropdown = ({
    name,
    value,
    placeholder,
    options,
    className,
    isDisabled,
    isSearchable,
    autoFocus,
    onChange,
    defaultValue,
}: IProps) => (
    <Select
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        options={options}
        onChange={onChange}
        autoFocus={autoFocus}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        styles={customStyles}
        defaultValue={defaultValue}
    />
)
