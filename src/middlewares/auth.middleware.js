
const checklogin = (req, res, next)=>{
    //check
    console.log("")

    next()
// next({status:401, message:"please login first"})
}

module.exports = checklogin