import mongoose from "mongoose";
const sensorSchema = new mongoose.Schema({
    riverName: {
        type: String,
        required: true,
        

    },
  
    regionName: {
        type: String,
        required: true,
        
    },
    latitude: {
        type: String,
        required: true,
        
    },
    longitude: {
        type: String,
        required: true,
        
    },
    sensorData: {
        type: Object,
        required: true,
    }


}, {timestamps: true})
const Sensor = mongoose.model('Sensor', sensorSchema)
export default Sensor