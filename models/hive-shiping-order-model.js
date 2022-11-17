const mongoose = require("mongoose")

const hiveShiping = new mongoose.Schema({
    firstName: {
        type: String,
        // required: true,
        minLength: 3,
    }, 
    lastName: {
        type: String,
        // required: true,
        minLength: 3,
    },
    email: {
        type: String,
        // required: true,
        minLength: 3,
    },
    phone: {
        type: String,
        // required: true,
        minLength: 3,
    }, 
    cityState: {
        type: String,
        // required: true,
        minLength: 3,
    }, 
    address: {
        type: String,
        // required: true,
        minLength: 3,
    },
    location: {
        type: String,
        // required: true,
        minLength: 3,
    },
    catlog: {
        type: String,
        // required: true,
        minLength: 3,
    },
    number: {
        type: String,
        // required: true,
        minLength: 3,
    }, 
    catalog: {
        type: String,
        // required: true,
        minLength: 3,
    },
    cost: {
        type: String,
        // required: true,
        minLength: 3,
    }, 
    image:{
        data: Buffer,
        contentType: String
    },
    img_url: {
        type: String,
        // required: true,
        minLength: 3,
    },

    date: Date,
})

hiveShiping.set("toJson", {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("hive-shiping-order", hiveShiping)