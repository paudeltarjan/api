class UserController {
    /**
     * This function creates a user in db.
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

    userCreate = async(req, res, next) => {

        try{

    const data = req.body;
       if(req.file){
        data.image = req.file.filename
       } 
       

        

       //mapping
      /*   const data = req.body;
       if(req.file){
        data.image = req.file.filename
       }

       const response =   UserCreateDto.validate(data)
       console.log(response); */

        //file upload
        // const singleton = req.files;
        // const files = req.files;
        // if(req.file){
        //     data.image = "user/"+ req.file.filename
        // }


        res.json({
            result: data,
            message:"user create",
            meta: null

        })
        } catch(exception){
            next(exception)
        }

    }

    listAllUsers = (req, res, next) => {


        res.json({
            results: {
                headers: req.headers
            },

            // result:null,
            message: "user create",
            meta: null
        })

    }

    getDetailById = (req, res, next) => {
        res.json({
            results: "User Details",
            meta: null,
            message: "All user Detail"
        })
    }

    putDetailById = (req, res, next) => {
        res.json({
            result: null,
            message: "user update",
            meta: null
        })
    }

    deleteUserById = (req, res, next) => {
        res.json({
            result: null,
            message: "user delete",
            meta: null
        })
    }

}

const userCtrl = new UserController()
module.exports = userCtrl;