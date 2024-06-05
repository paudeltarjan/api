    //   const express = require('express');
/* or, es6
import express from express */
    //  const app = express();

//endpoint---Api---Url
//request

//  /login --endpoint

// app.use((req, res)=>{
//     //always execute
// })

// app.get()--for post,patch,.....
/*  app.get("/user/username", (req,res)=>{
}) -username is key it is dynmaic */

/* 
app.get("/user/:id",(req, res)=>{
const params = req.params; //object
// const query = req.query;

res.json({
    results:{
        params:params,
        // query:query
    },

    message:"user Detail with username",
    meta: null

})
})

app.post("/user", (req, res)=>{
    

    res.json({
        results:{
        headers: req.headers
    },
    
    // result:null,
    message:"user create",
    meta: null
    })

})

app.get("/user",(req,res)=>{
    //to fetch data (user)  from db
    res.json({
        results:"List all users",//[]
        meta:null,
        message:"All user List"
    })
})

app.get("/user/:id",(req, res)=>{
    res.json({
        results:"User Details",
        meta:null,
        message:"All user Detail"
    })

})

app.put("/user/:id",(req, res)=>{
    res.json({
        result:null,
        message:"user update",
        meta:null
    })
})

app.delete("/user/:id",(req, res)=>{
    res.json({
        result:null,
        message:"user delete",
        meta:null
    })
})

// app.use() ---will recive every request
app.use("/", (request, response)=>{
/* response.send("Namaste Text")
response.end("normal text")
response.sendFile("./path of your file")
response.render('path template')
response.send.status() response
response.status */

// response.status(280).json({
// result:"data. any type",
// message:"Home data fetched",
// meta: null //null,array, object
// })


//routing 
/* app.get()  //read
app.post()  //create
app.put()  
app.patch()  //update
app.delete()  */ //Delete
// module.exports = app; 













const express = require("express");

const router = require("../router/router.config");

// const import = require("../router/router.config")

const app = express();

//body parser
app.use(express.json())
app.use(express.urlencoded({
    extend :true
})
)

app.use(router);


app.use((req, res, next)=>{
    //404
    next({ status:404, message:"Resource not found"})
})


app.use ((error, req, next)=>{
    let status = error.status || 500
    let message = error.message ||  "server error"
    let result = error.details|| null;

//todo status

res.status(status).json({
    result:result,
    meta: null,
    message: " "
})
});
module.exports = app;