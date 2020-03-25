const express = require('express') 

const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents', incidentController.delete)

routes.get('/profile', ProfileController.index)

routes.post('/sessions', SessionController.create)

module.exports = routes