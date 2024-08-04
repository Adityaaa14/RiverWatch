import express from 'express'
import { addWaterbody, createRegion, getRegion, getallRegions, getallwaterbodiesinRegion, updateRegion } from '../controllers/regions.controller.js'
const router = express.Router()
router.put('/addwaterbody/:region_id', addWaterbody)
router.post('/createregion', createRegion)
router.get('/getregion/:id',getRegion)
router.get('/getallregions',getallRegions)
router.get('/getallwaterbodiesinregion/:id', getallwaterbodiesinRegion)
router.put('/updateregion/:id',updateRegion)
export default router