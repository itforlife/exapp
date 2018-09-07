import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Select } from '@elements/Select';

storiesOf('Select', module).add('basic render', () => (
    <Select
        data-controller="select"
        itemClass="item"
        itemSelectedClass="selected"
        value="Fishing"
        items={['Fishing', 'Hunting']}
    />
));
