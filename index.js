const http = require("http")

const app = require("./src/config/express.config")

const server = http.createServer(app)
    // res.end("Namaste Nepal")




server.listen(9000, '127.0.0.1' , (err)=>{
    if(!err){
        console.log('sserver is running on port 9000')
        console.log("press ctrl+c to disconnect server...")

    }

})
