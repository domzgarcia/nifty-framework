'use strict'

let { ioc, ServiceProvider } = require('@adonisjs/fold')
const path = require('path')

class AppProvider extends ServiceProvider {
    
    async boot () {
        
    }
    register () {
        this._registerConfig()
        this._registerEnv()
    }

    _registerConfig(){
        ioc.singleton('@adonisMini/Src/Config', function(app){
            let Config = require('../src/Config')
            let location = path.join(global.rootDir, 'core/config')
            return new Config(location)
        })
        this.app.alias('@adonisMini/Src/Config', 'Config')
    }

    _registerEnv(){
        ioc.singleton('@adonisMini/Src/Env', function(app){
            let Env = require('../src/Env')
            let location = path.join(global.rootDir)
            return new Env(location)
        })
        this.app.alias('@adonisMini/Src/Env', 'Env')
    }
}

module.exports =  AppProvider;