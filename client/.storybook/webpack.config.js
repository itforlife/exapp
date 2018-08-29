const baseWebpackConfig = require('../webpack.config')
const path = require('path')
module.exports = Object.assign({}, baseWebpackConfig, {
    output: {
        path: 'bundle.js',
        path: path.resolve(__dirname, '..', 'dist'),
    },
})
