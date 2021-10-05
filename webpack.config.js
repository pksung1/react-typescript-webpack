const path = require('path')

module.exports = {
    entry: './index.jsx',
    output: {
        path: path.resolve(__dirname, dist),
        filename: 'bundle.js'
    }
}