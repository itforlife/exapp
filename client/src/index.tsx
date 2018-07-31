import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
    // tslint:disable-next-line:no-console
    const renderMethod = module.hot
        ? ReactDOM.render
        : ReactDOM.hydrate || ReactDOM.render
    const render = Comp => {
        renderMethod(<Comp />, document.getElementById('root'))
    }

    // Render!
    render(App)
}
