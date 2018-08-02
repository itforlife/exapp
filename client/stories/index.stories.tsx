import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { FloatingInput } from '../src/modules/elements/floatingInput'

storiesOf('FloatingInput', module)
    .add('floating with label down', () => <FloatingInput label="test" />)
    .add('floating with label up', () => (
        <FloatingInput label="test" value="typed value" />
    ))
