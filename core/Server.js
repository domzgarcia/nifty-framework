'use strict'

const express = require('express')
const app = express()
const Config = use('Config')

class Server {
    
    constructor () {
        this._port = Config.get('app.port')
        this._setUpGenericRoutes()
    }
    _setUpGenericRoutes(){
        app.get('/', (req, res) => res.send('Hello World!'))
        app.listen(this._port, () => console.log(`Example app listening on port ${this._port}!`))
    }
}

module.exports = Server