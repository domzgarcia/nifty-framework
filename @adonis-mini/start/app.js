'use strict'

const path = require('path')

let providersPath = path.resolve('@adonis-mini/providers')

/**
 * Since providers are not coming from any npm module
 * We need to resolve the path from providers folder manually
 */
const providers = [
    path.join(providersPath, 'AppProvider'),
]

module.exports = { providers }