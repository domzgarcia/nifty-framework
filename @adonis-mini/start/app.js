const path = require('path')

let resolvePath = path.resolve('@adonis-mini/providers')

const providers = [
    path.join(resolvePath, 'EnvProvider'),
    path.join(resolvePath, 'ConfigProvider')
]

module.exports = { providers }