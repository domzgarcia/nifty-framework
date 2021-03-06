'use strict'

class Setup {
    
    express(){
        /*
        * Server will be created inside this scope
        * We now have Ioc access across the app
        * within server instantiation.
        */
        new (require('./Server'))()
    }
}

module.exports = Setup