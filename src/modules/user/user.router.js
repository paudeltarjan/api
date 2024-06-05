
/* userRouter.get("/user/:id",(req, res)=>{
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
      
    userRouter.post("/user", (req, res)=>{
        
    
        res.json({
            results:{
            headers: req.headers
        },
        
        // result:null,
        message:"user create",
        meta: null
        })
    
    })
    
    userRouter.get("/user",(req,res)=>{
        //to fetch data (user)  from db
        res.json({
            results:"List all users",//[]
            meta:null,
            message:"All user List"
        })
    })
      
    userRouter.get("/user/:id",(req, res)=>{
        res.json({
            results:"User Details",
            meta:null,
            message:"All user Detail"
        })
    
    })
     
    userRouter.put("/user/:id",(req, res)=>{
        res.json({
            result:null,
            message:"user update",
            meta:null
        })
    })
    
    userRouter.delete("/user/:id",(req, res)=>{
        res.json({
            result:null,
            message:"user delete",
            meta:null
        })
    }) */

/* const checklogin = (req, res, next)=>{
    //check
    console.log("")

    next()
// next({status:401, message:"please login first"})
}
const allowUser = (req, res,next)=>{
    console.log("")
next()    
} */



const userRouter = require("express").Router()
const userCtrl = require("./user.controller")
const checklogin = require("../../middlewares/auth.middleware");
const allowUser = require("../../middlewares/rbac.middleware");
const {setPath, uploader} = require("../../middlewares/uploader.middleware")
const {bodyValidator} = require("../../middlewares/validator.middleware")
const {userCreateDto} = require("./user.request")



userRouter.use(checklogin)

    userRouter.route("/")
    .post(allowUser, setPath('/user'), uploader.single('image'), bodyValidator(userCreateDto),userCtrl.userCreate)
    .get(userCtrl.listAllUsers)

    userRouter.route("/:id")
    .get(userCtrl.getDetailById)
    .put(userCtrl.putDetailById)
    .delete(userCtrl.deleteUserById)


    module.exports = userRouter;
    
    








