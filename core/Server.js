'use strict'

const express = require('express')
const app = express()

class Server {
    
    constructor(){
        /** */
    }

    wrapped(){
        /*
        * Should you create your http inside this scope
        * We now have Ioc access such as ConfigProvider
        */
        const Config = use('Config')
        
        const port = Config.get('app.port')
        
        app.get('/', (req, res) => res.send('Hello World!'))
        
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }
}

module.exports = Server