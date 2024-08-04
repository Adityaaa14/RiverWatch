import Waterbody from "../models/waterbodies.model.js";
import { errorHandler } from "../utils/error.js";
export const createWaterbody = async(req,res,next)=>{
    const {riverName, length} = req.body
    if(!riverName || !length){
        return next(errorHandler(400, 'All fields are required'))

    }
    const newWaterbody = new Waterbody({
        riverName,
        length
    })
    try{
       const savedWaterbody= await newWaterbody.save()
        res.status(200).json(savedWaterbody)
    }
    catch(error){
        next(error)
    }
}