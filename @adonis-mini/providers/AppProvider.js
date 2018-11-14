'use strict'

let { ioc, ServiceProvider } = require('@adonisjs/fold')
const path = require('path')

class AppProvider extends ServiceProvider {
    
    async boot () {
        /** */
    }
    register () {
        this._registerConfig()
        this._registerEnv()
    }

    _registerConfig(){
        ioc.singleton('@adonisMini/Src/Config', function(app){
            const Config = require('../src/Config')
            // const Helpers = app.use('Helpers')
            return new Config(global.rootDir)
        })
        this.app.alias('@adonisMini/Src/Config', 'Config')
    }

    _registerEnv(){
        ioc.singleton('@adonisMini/Src/Env', function(app){
            let Env = require('../src/Env')
            // const Helpers = app.use('Helpers')
            return new Env(global.rootDir)
        })
        this.app.alias('@adonisMini/Src/Env', 'Env')
    }
}

module.exports =  AppProvider;