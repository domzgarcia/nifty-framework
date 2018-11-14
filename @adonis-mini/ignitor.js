"use strict"

const path = require('path')
const Youch = require('youch')
const forTerminal = require('youch-terminal')

class Ignitor {

    constructor (fold){
        this._fold = fold
        this._appRoot = null
        this._appFile = path.join(__dirname, '/start/app.js')
    }

    /**
     * Set application app root
     *
     * @method appRoot
     *
     * @param  {String} location
     *
     * @chainable
     */
    appRoot (location){
        this._appRoot = location
        return this
    }
    /**
     * Registers an array of providers to the Ioc container. This
     * method will make use of the `appFile` to get the providers
     * list.
     *
     * @method _registerProviders
     *
     * @return {void}
     *
     * @private
     */
    _registerProviders (){
        const { providers } = this._getAppAttributes()

        console.log(providers)

        let providersToRegister = providers ? providers : []
        this._fold.registrar.providers(providersToRegister).register()
    }
    /**
     * Return the exported values from the appFile. Also
     * it will validate the exports object to have all
     * required keys.
     *
     * @method _getAppAttributes
     *
     * @return {Object}
     *
     * @private
     */
    _getAppAttributes () {
        return require(
            this._appFile
        )
    }
    /**
     * Boot providers
     *
     * @method _bootProviders
     *
     * @return {void}
     *
     * @async
     *
     * @private
     */
    async _bootProviders () {
        await this._fold.registrar.boot()
    }
    /**
     * Sets up fire by performing following
     * operations in sequence.
     *
     * 1. Register helpers.
     * 2. Load hooks file ( if any ).
     * 3. Register providers.
     * 4. Boot providers.
     * 5. Defined Aliases.
     * 6. Load files to be preload.
     * 7. Start http server.
     *
     * @method fire
     *
     * @return {void}
     *
     * @throws {Error} If app root has not be defined
     */
    async fire (){
        if (!this._appRoot) {
        throw new Error('Cannot start http server, make sure to register the app root inside server.js file')
        }
        /**
         * Register + Boot providers
         */
        this._registerProviders()
        await this._bootProviders()
    }
    /**
     * Starts the Adonis http server.
     *
     * @method fireHttpServer
     *
     * @param {Function} httpServerCallback
     *
     * @return {void}
     */
    async fireHttpServer (httpServerCallback) {
        try {
            await this.fire()
            httpServerCallback()
        } catch (error) {
            this._printError(error)
        }
    }
    /**
     * Pretty prints the error to the terminal
     *
     * @method _printError
     *
     * @param  {Object}    error
     *
     * @return {void}
     *
     * @private
     */
    async _printError (error) {
        const output = await new Youch(error, {}).toJSON()
        console.log(forTerminal(output))
        process.exit(1)
    }
}

module.exports = { Ignitor }