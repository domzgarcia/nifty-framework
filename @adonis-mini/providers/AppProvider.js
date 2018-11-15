'use strict'

let { ServiceProvider } = require('@adonisjs/fold')
const path = require('path')

class AppProvider extends ServiceProvider {
    
    boot () {
        /**
         * Gets the provider load the env file.
         */
        this.app.use('Env')
    }

    register () {
        this._registerConfig()
        this._registerEnv()
    }

    _registerConfig () {
        this.app.singleton('@adonisMini/Src/Config', function(){
            const Config = require('../src/Config')
            const Helpers = use('Helpers')
            return new Config(path.join(Helpers.appRoot(), 'core/config'))
        })
        this.app.alias('@adonisMini/Src/Config', 'Config')
    }

    _registerEnv () {
        this.app.singleton('@adonisMini/Src/Env', function(){
            let Env = require('../src/Env')
            const Helpers = use('Helpers')
            return new Env(Helpers.appRoot())
        })
        this.app.alias('@adonisMini/Src/Env', 'Env')
    }
}

module.exports =  AppProvider;