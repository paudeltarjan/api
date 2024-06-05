/* const { Router } = require('express');

const router = require('express').Router();

router.get("user/:id/:username",(req, res)=>{
const params = req.params; //object


res.json({
    results:{
        params:params,
       
    },

    message:"user Detail with username",
    meta: null

})
})

router.post("/user", (req, res)=>{
    

    res.json({
    
    result:null,
    message:"user create",
    meta: null
    })

})

router.put("/user",(req, res)=>{
    res.json({
        result:null,
        message:"user update",
        meta:null
    })
})

router.delete("/user/:id",(req, res)=>{
    res.json({
        result:null,
        message:"user delete",
        meta:null
    })
})

response.status(280).json({
result:"data. any type",
message:"Home data fetched",
meta: null //null,array, object
})
module.exports = router; */


const router = require("express").Router();
const userRouter = require("../modules/user/user.router")
const bannerRouter = require("../modules/banner/banner.router")

router.use("/user", userRouter);
router.use("/banner", bannerRouter);

router.get("/home", (request, response, next)=>{

    response.json({
        result:"data any type",
        message:"Home data fetched",
        meta:null
    })

})

module.exports = router;