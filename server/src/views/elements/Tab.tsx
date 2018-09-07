import * as React from 'react';
import { classes } from 'typestyle';
interface ITabItem {
    label: string;
    revealsElement?: string;
    href?: string;
}
interface ITabProps {
    items: ITabItem[];
    selectedTabIndex?: number;
}
export const Tab: React.SFC<ITabProps> = (props: ITabProps) => (
    <ul className="nav nav-tabs" data-controller="tabs">
        {
            props.items.map((item, i) => 
                (<li className="nav-item">
                    <a data-action="click->tabs#revealTab" data-tabs-reveal={item.revealsElement} className={classes('nav-link', i === props.selectedTabIndex && 'active' )} href={item.href}>{item.label}</a>
                </li>)
            )
        }
    </ul>
)

Tab.defaultProps = {
    selectedTabIndex: 0
}