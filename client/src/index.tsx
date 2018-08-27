import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
// import { setStylesTarget } from 'typestyle'

window.addEventListener('load', () => {
    // setStylesTarget(document.getElementById('styles-target'))
    ReactDOM.render(<App />, document.getElementById('root'))
})
