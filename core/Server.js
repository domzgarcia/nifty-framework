'use strict'

const express = require('express')
const app = express()
const Config = use('Config')

class Server {
    
    constructor () {
        this._port = Config.get('app.port')
        app.get('/', (req, res) => this.index(req, res) )
        app.listen(this._port, () => console.log(`Example app listening on port ${this._port}!`))
    }
    
    index(req, res){
        return res.send('Hello World!')
    }
}

module.exports = Server