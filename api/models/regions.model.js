import mongoose from "mongoose";
const regionSchema = new mongoose.Schema({
    regionName: {
        type: String,
        required: true,
        unique: true,
    },
    waterbodies: {
        type: Array,
        default: [],
        

    },
    
    

}, {timestamps: true})
const Region = mongoose.model('Regions', regionSchema)
export default Region