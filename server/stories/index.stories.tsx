import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { FloatingInput } from '@elements/FloatingInput';

storiesOf('FloatingInput', module)
    .add('basic render', () => <FloatingInput label="Default Input" />)
    .add('success render', () => (
        <FloatingInput label="Success Input" success />
    ))
    .add('error render', () => <FloatingInput label="Error Input" error />);
