import express from 'express'
import { createWaterbody } from '../controllers/waterbodies.controller.js'
const router = express.Router()
router.post('/createwaterbody', createWaterbody)
export default router