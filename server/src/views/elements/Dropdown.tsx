import * as React from 'react';
import { classes } from 'typestyle';
/**
 * Generic dropdown component.
 * To attach client side behaviour, eg ability to click and open it etc
 * you need to pass it a data-controller attribute
 * Usage:
 *  <Dropdown data-controller="dropdown"
              itemClass="item"
              itemSelectedClass="selected"
              value="Fishing"
              items={['Fishing', 'Hunting']} />
 */
interface IOption {
    label: string;
    value: string;
}
type ItemType = IOption | string;
interface IDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    items: ItemType[];
    itemClass?: string;
    itemSelectedClass?: string;
}
const toSelectOptions = (ddProps) => (item: ItemType) => {
    const { value: selectedValue, itemClass, itemSelectedClass } = ddProps;
    const value = typeof item === 'string' ? item : item.value;
    const label = typeof item === 'string' ? item : item.label;
    const selected = selectedValue === value;
    const itemSelectedCls = selected ? itemSelectedClass : null;
    const optionCls = classes(itemClass, itemSelectedCls);
    return (<option className={optionCls} selected={selected} key={value} value={value}>{label}</option>);
}

export const Dropdown = ({ items, itemClass, itemSelectedClass, ...props}: IDropdownProps) => {
    return (<select {...props} style={{ display: "none" }} 
                    data-dropdown-item-class={itemClass} 
                    data-dropdown-item-selected-class={itemSelectedClass}>
        {
            items.map(toSelectOptions({ value: props.value, itemClass, itemSelectedClass }))
        }
    </select>)
}