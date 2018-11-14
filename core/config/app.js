'use strict'

const Env = use('Env')

module.exports = {
    
    name: Env.get('APP_NAME', ''),
    
    port: 3000,
}