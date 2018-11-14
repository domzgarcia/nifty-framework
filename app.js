'use strict'

global.rootDir = __dirname

let { Ignitor } = require('./@adonis-mini/Ignitor')

new Ignitor(require('@adonisjs/fold'))
    .appRoot(__dirname)
    .fireHttpServer( new (require('./core/Server'))().initialize)
    .catch(console.error)