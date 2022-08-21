const { Router } = require('express')
const userController = require('../controllers/user.controller.js')

const router = new Router()

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.put('/user', userController.updateUser)
router.delete('/user/:name', userController.deleteUser)

module.exports = router