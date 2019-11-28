const express = require('express')
const controllers = require('./app/controllers')

const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.post('/sessions', controllers.SessionController.store)
routes.post('/users', controllers.UserController.store)

/**
 * Private Routes
 * Authenticate needed
 */

routes.use(authMiddleware)

routes.get('/client', controllers.ClientController.index)
routes.post('/client', controllers.ClientController.store)
routes.put('/client/:id', controllers.ClientController.update)
routes.delete('/client/:id', controllers.ClientController.delete)

module.exports = routes
