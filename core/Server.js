'use strict'

class Server {
    
    constructor(){

    }

    initialize(){
        // Creation of server should be inside this scope
        const Config = use('Config')
        console.log(Config.get('database.mysql.connection.host'))
    }
}

module.exports = Server