const path = require('path')

const express = require('express')

const destinationController = require('../controllers/destinationController')

const router = express.Router()

router.get('/add-destination', destinationController.getAddDestination)
router.get('/', destinationController.Landing)
router.get('/destinations', destinationController.getDestinations)
router.post('/add-destination', destinationController.postAddDestination)



module.exports = router