const config = require("./utils/config")
const express = require("express")
require("express-async-errors")
const app = express()
const cros = require("cors")
const thehiveRouter = require("./controllers/the-hive-controllres")
const hiveOrderRouter = require("./controllers/hive-shiping-order-controlles")
const middleware = require("./utils/middleware")
const logger = require("./utils/logger")
const mongoose = require("mongoose")

// CONNECTING MONGODB the-hive-data-base
logger.info("connecting to", config.MONGODB_URL)

mongoose.connect(config.MONGODB_URL).then(()=>{
    logger.info("connected to mongodb")
}).catch(error=>{
    logger.error("connection failed: ", error.message)
})


app.use(cros())
app.use(express.static("build"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(middleware.requestLogger)


// CONNECTING REOUTERS
app.use("/api/thehivecatlog", thehiveRouter)
app.use("/api/hiveorder", hiveOrderRouter)

// SETTING ERROR HANDELING AND UNKNOWN END POINT
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app