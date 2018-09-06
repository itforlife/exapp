import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Dropdown } from '@elements/Dropdown';

storiesOf('Dropdown', module).add('basic render', () => (
    <Dropdown
        data-controller="dropdown"
        itemClass="item"
        itemSelectedClass="selected"
        value="Fishing"
        items={['Fishing', 'Hunting']}
    />
));
