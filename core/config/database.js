'use strict'

const Env = use('Env')

module.exports = {
    
    connection: Env.get('DB_CONNECTION', 'mongodb'),

    mongodb: {
        client: 'mongodb',
        connection: {
            host: Env.get('DB_HOST', 'localhost'),
            port: Env.get('DB_PORT', ''),
            user: Env.get('DB_USER', 'root'),
            password: Env.get('DB_PASSWORD', ''),
            database: Env.get('DB_DATABASE', 'test_db')
        }
    },
}