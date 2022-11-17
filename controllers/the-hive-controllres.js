const hivePrintsRouter = require("express").Router()
const HivePrintOrders = require("../models/the-hive-catlog") // require("../models/hive-shiping-order-model")


hivePrintsRouter.get("/", async (request, response)=>{
    const res = await HivePrintOrders.find({})
    response.json(res)
})

hivePrintsRouter.get("/:id", async (request, response)=>{
    const id = request.params.id
    const res = await HivePrintOrders.find({id})
    if(res){
        response.json(res)
    }else{
        response.status(404).end()
    }
    
})

module.exports = hivePrintsRouter