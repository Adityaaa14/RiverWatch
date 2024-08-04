import mongoose from "mongoose";
const waterbodySchema = new mongoose.Schema({
    riverName: {
        type: String,
        required: true,
        unique: true,
        sparse: true,
    },
  
    length: {
        type: String,
        required: true,
    }


}, {timestamps: true})
const Waterbody = mongoose.model('Waterbody', waterbodySchema)
export default Waterbody