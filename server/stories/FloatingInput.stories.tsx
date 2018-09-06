import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { FloatingInput } from '@elements/FloatingInput';
import { Checkbox } from '@elements/Checkbox';

storiesOf('FloatingInput', module)
    .add('basic render', () => <FloatingInput label="Default Input" />)
    .add('success render', () => (
        <FloatingInput label="Success Input" success />
    ))
    .add('error render', () => <FloatingInput label="Error Input" error />);

storiesOf('Checkbox', module)
    .add('basic render - unchecked', () => (
        <Checkbox label="Checkbox unchecked" />
    ))
    .add('basic render - checked', () => (
        <Checkbox label="Checkbox checked" checked />
    ))
    .add('disabled render', () => (
        <Checkbox label="Checkbox disabled" checked disabled />
    ));
