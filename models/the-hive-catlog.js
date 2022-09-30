const mongoose = require("mongoose")

const theHiveCatlog = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    type: {
        type: String,
        required: true,
        minLength: 3,
    },
    catlog: {
        type: String,
        required: true,
        minLength: 3,
    },
    discription: {
        type: String,
        required: true,
        minLength: 3,
    },
    cost: {
        type: String,
        required: true,
        minLength: 3,
    },
    naira: {
        type: String,
        required: true,
        minLength: 3,
    },
    image_links: {
        type: Map,
        of: String
    }
})

theHiveCatlog.set("toJson", {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("the-hive-catlog", theHiveCatlog)