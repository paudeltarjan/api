const multer = require("multer")
const fs = require("fs")


const mystorage = multer.diskStorage({
    destination: (req, res, cb)=>{
    const path= "./public/uploads/" + req.uploadPath;
    if(!fs.exsistsSync(path)){
        //dir create
        fs.mkdirSync(path, {recursive:true})
    }
    cb(null, path)
    },
    filename:(req, file, cb)=>{
        //filename.ext
        //.ext
        //name.png===>["name","png"]==>pop()==>png

        const ext = file.originalname.split(".").pop()
        const random = Math.ceil((Math.random()) * 99999)
        const filename = Date.now()+"-"+ random+"."+ext;
    }
})


const uploader = multer({
    storage:mystorage,
    fileFilter:(req, file, cb)=>{

        const ext = file.originalname.split(".").pop()
        const allowed = ['jpg','png','jpeg','gif', 'svg','webp','bmp' ];

        if(allowed.includes(ext.toLowerCase)){
            cb(null, true)

        }else{
            cb({status: 400, message:"file format not supporter"}, false)

        }
    },
    limits:{
        fileSize: 3000000
    }
})
const setPath = (path) => {
    return (req, res, next)=>{
        req.uploadPath = path;
        next()
    }
}

module.exports = {uploader, setPath}