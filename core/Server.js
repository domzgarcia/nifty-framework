'use strict'

class Server {
    
    constructor(){

    }

    wrapped(){
        // Should your create http inside this scope
        const Config = use('Config')
        console.log(Config.get('database.mysql.connection.host'))
    }
}

module.exports = Server