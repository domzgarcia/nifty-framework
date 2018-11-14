"use strict"

let { Ignitor } = require('./@adonis-mini/Ignitor')
let Server = new (require('./core/Server'))()

new Ignitor(require('@adonisjs/fold'))
.appRoot(__dirname)
.fireHttpServer(Server.attached)
.catch(console.error)