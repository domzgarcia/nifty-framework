const path = require('path')

let providersPath = path.resolve('@adonis-mini/providers')

/**
 * Since providers are not coming from any npm module
 * We need to resolve the path from providers folder
 */
const providers = [
    path.join(providersPath, 'EnvProvider'),
    path.join(providersPath, 'ConfigProvider')
]

module.exports = { providers }