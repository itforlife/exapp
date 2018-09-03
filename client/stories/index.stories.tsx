import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { FloatingInput } from '../src/modules/elements/FloatingInput';

storiesOf('FloatingInput', module).add('basic render', () => (
    <FloatingInput label="Default Input" />
));
