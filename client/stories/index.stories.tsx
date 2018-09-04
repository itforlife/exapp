import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { FloatingInput } from '../src/modules/elements/FloatingInput';

storiesOf('FloatingInput', module)
    .add('basic render', () => <FloatingInput label="Default Input" />)
    .add('success render', () => (
        <FloatingInput label="Success Input" success />
    ))
    .add('error render', () => <FloatingInput label="Error Input" error />)
    .add('disabled render', () => (
        <FloatingInput label="Disabled Input" disabled />
    ));
