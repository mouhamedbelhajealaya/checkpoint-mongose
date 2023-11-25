const personControoller = require('../controllers/personControoller')
const Router = require('express').Router()
Router.get('/get',personControoller.get)

Router.get('/getByFoods',personControoller.getByFoods)
Router.get('/getById',personControoller.getById)
Router.post('/add',personControoller.add)
Router.put('/pushPizza',personControoller.pushPizza)
Router.put('/changeAge',personControoller.changeAge)
Router.delete('/deleteById',personControoller.deleteById)
Router.delete('/deleteByName',personControoller.deleteByName)














module.exports = Router