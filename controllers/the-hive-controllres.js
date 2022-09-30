const thehiveRouter = require("express").Router()
const theHiveCatlog = require("../models/the-hive-catlog")


thehiveRouter.get("/", async (request, response)=>{
    const res = await theHiveCatlog.find({})
    response.json(res)
})

thehiveRouter.get("/:id", async (request, response)=>{
    const id = request.params.id
    const res = await theHiveCatlog.find({id})
    if(res){
        response.json(res)
    }else{
        response.status(404).end()
    }
    
})

module.exports = thehiveRouter