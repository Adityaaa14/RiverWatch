import Region from "../models/regions.model.js";
import { errorHandler } from "../utils/error.js"
export const addWaterbody = async(req,res,next)=>{
    const {riverName} = req.body
    if(!riverName){
        return next(errorHandler(400, 'All fields are required'))

    }
    const region_id = req.params.region_id
    try{
    const region = await Region.findById(region_id)
    region.waterbodies.push({
        
        riverName
    })
    await region.save()
    res.status(200).json(region)
    
        
    
    
    }
    catch(err){
        next(err)
    }

}
export const createRegion = async(req,res,next)=>{
    const {regionName, waterbodies} = req.body
    if(!regionName){
        return next(errorHandler(400, 'Please provide region name'))
    }
    const newRegion = new Region({
        regionName,
        waterbodies
    })
    try{
        const savedRegion = await newRegion.save()
        res.status(200).json(savedRegion)
    }
    catch(err){
        next(err)
    }


}
export const getallRegions = async(req,res,next)=>{
   
    try{
        const Regions = await Region.find()
        res.status(200).json(Regions)
    }
    catch(err){
        next(err)
    }


}
export const getRegion = async(req,res,next)=>{
   
    try{
        const region = await Region.findById(req.params.id)
        res.status(200).json(region)
    }
    catch(err){
        next(err)
    }


}
export const getallwaterbodiesinRegion = async(req,res,next)=>{
   
    try{
        const region = await Region.findById(req.params.id)
        res.status(200).json(region.waterbodies)
    }
    catch(err){
        next(err)
    }


}
export const updateRegion = async(req,res,next)=>{
  try{
    const updatedRegion = await Region.findByIdAndUpdate(req.params.id,{
        $set: {
            regionName: req.body.regionName,
            waterbodies: req.body.waterbodies
        }
    }, {new: true})
    res.status(200).json(updatedRegion)
  }
  catch(err){
    next(err)
  }


}