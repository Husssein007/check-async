const express = require('express');

const personRoute = express.Router();

const{getAll,ajout,update,remove}=require('../controllers/controllersPerson')

personRoute.get('/allpersons',getAll)

personRoute.post('/ajout',ajout)

personRoute.put('/update/id',update)

personRoute.delete('/remove/:id',remove)

module.exports = personRoute