const thehiveRouter = require("express").Router()
const theHiveCatlog =  require("../models/hive-shiping-order-model")// 


thehiveRouter.get("/", async (request, response)=>{
    const res = await theHiveCatlog.find({})
    response.json(res)
})

thehiveRouter.post("/", async (request, response)=>{

    console.log(request.body)

    // const oreder = request.body
    // // const res = await theHiveCatlog.({id})
    // const newHiveOrder = new theHiveCatlog({
    //     oreder,
    //     date: new Date(),
    // })
    // const savedOrder = await newHiveOrder.save()
    
    // response.status(201).json(savedOrder)
    
})

module.exports = thehiveRouter