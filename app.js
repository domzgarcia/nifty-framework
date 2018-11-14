'use strict'

global.rootDir = __dirname

let { Ignitor } = require('./@adonis-mini/ignitor')

new Ignitor(require('@adonisjs/fold'))
    .appRoot(__dirname)
    .fireHttpServer( new (require('./core/Server'))().wrapped)
    .catch(console.error)