import mongoose from "mongoose";


const Schema = mongoose.Schema

const Inventory = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },


    // NOTE this will add date properties 
    // NOTE toJSON this says when you make this object i want to keep the virtual properties attached ex
}, { timestamps: true, toJSON: { virtuals: true } })


export default Inventory