import Region from "../models/regions.model.js";
import Sensor from "../models/sensors.model.js";
import Waterbody from "../models/waterbodies.model.js";
import { errorHandler } from "../utils/error.js";
export const createSensor = async(req,res,next)=>{
    const {riverName, regionName,latitude,longitude, sensorData} = req.body
  
    const newSensor = new Sensor({
        riverName,
        regionName,
        latitude,
        longitude,
        sensorData,
    })
    try{
       const savedSensor= await newSensor.save()
        res.status(200).json(savedSensor)
    }
    catch(error){
        next(error)
    }
}
export const getallsensorsinRegion = async(req,res,next)=>{
   
    try{
        const region = await Region.findById(req.params.id)
        
        const regionname = region.regionName
        const sensors = await Sensor.find({regionName:regionname})
        res.status(200).json(sensors)
    }
    catch(err){
        next(err)
    }


}
export const getallsensorsinRiver = async(req,res,next)=>{
   
    try{
        const river = await Waterbody.findById(req.params.id)
        const rivername = river.riverName
        
        
        const sensors = await Sensor.find({riverName:rivername})
        res.status(200).json(sensors)
    }
    catch(err){
        next(err)
    }


}
export const getallSensors = async(req,res,next)=>{
   
    try{
        const sensors = await Sensor.find()
        res.status(200).json(sensors)
    }
    catch(err){
        next(err)
    }


}
export const updateSensor = async(req,res,next)=>{
    try{
      const updatedSensor = await Sensor.findByIdAndUpdate(req.params.id,{
          $set: {
              regionName: req.body.regionName,
              riverName: req.body.riverName,
              latitude: req.body.latitude,
              longitude: req.body.longitude,
              sensorData: req.body.sensorData,
          }
      }, {new: true})
      res.status(200).json(updatedSensor)
    }
    catch(err){
      next(err)
    }
  
  
  }