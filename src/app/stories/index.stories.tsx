import * as React from 'react'

import {action} from 'storybook__addon-actions'
import {linkTo} from '@storybook/addon-links'
import {storiesOf} from 'storybook__react'

import {Button, Welcome} from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)