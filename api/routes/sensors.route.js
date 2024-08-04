import express from 'express'
import { createSensor, getallSensors, getallsensorsinRegion, getallsensorsinRiver, updateSensor } from '../controllers/sensors.controller.js'

const router = express.Router()
router.post('/createsensor',createSensor)
router.get('/getallsensors', getallSensors)
router.get('/getallsensorsinregion/:id',getallsensorsinRegion)
router.get('/getallsensorsinriver/:id',getallsensorsinRiver)
router.put('/updatesensor/:id',updateSensor)
export default router