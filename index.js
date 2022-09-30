const http  = require("http")
const app = require("./app")
const config = require("./utils/config")
const logger = require("./utils/logger")


const server = http.createServer(app)

server.listen(config.PORT, ()=>{
    logger.info(`server is running on `)
})


























// const express = require("express")
// const app = express()
// require("express-async-errors")
// require("dotenv").config()
// const mongoose = require("mongoose")
// const cros = require("cors")

// // resouses for front end
// const res = require("./thehiverecources.json")

// // mongodb schema
// const catlogSchema = new mongoose.Schema({
//     // name: {
//     //     type: String,
//     //     required: true,
//     //     minLength: 3,
//     // },
//     // type: {
//     //     type: String,
//     //     required: true,
//     //     minLength: 3,
//     // },
//     // catlog: {
//     //     type: String,
//     //     required: true,
//     //     minLength: 3,
//     // },
//     // discription: {
//     //     type: String,
//     //     required: true,
//     //     minLength: 3,
//     // },
//     // cost: {
//     //     type: String,
//     //     required: true,
//     //     minLength: 3,
//     // },
//     // naira: {
//     //     type: String,
//     //     required: true,
//     //     minLength: 3,
//     // },
//     // image_links: {
//     //     type: Map,
//     //     of: String
//     // }
// })
// const theHiveCatlog = mongoose.model("the-hive-catlog", catlogSchema)

// // CONNECTION TO AWS MONGODB
// const url = process.env.MONGODB_URL 
// mongoose.connect(url, 
//     { useNewUrlParser: true, useUnifiedTopology: true }).then(async (resulte)=>{
//     console.log("connected ..... to AWS")

//     await theHiveCatlog.insertMany(res)
//     // return saved.save()

// }).then(()=>{
//     console.log("note saved")
//     return mongoose.connection.close()
// }).catch((err)=>console.log(err))



// // console.log(url)


// // const jsonData = JSON.parse(fs.readFileSync("../../products-images/thehiverecources.json").toString())
// // console.log(res)

