'use strict'

let { Ignitor } = require('./@adonis-mini')

new Ignitor(require('@adonisjs/fold'))

    .appRoot(__dirname)

    .fireHttpServer( new (require('./core/Server'))().wrapped)
    
    .catch(console.error)