'use strict'

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
        console.log(Config.get('database.mongodb.connection.host'))
    }
}

module.exports = Server