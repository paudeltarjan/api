class BannerController {

    BannerCreate = (req, res, next) => {

        res.json({
            results: {
                // results:""
            },

            // result:null,
            message: "Banner created",
            meta: null
        
    })

    }

    listAllBanner = (req, res, next) => {


        res.json({
            results: {
                id:"",
                title:"",
                links:"",
                image:"",
                message:"All banner list",
                meta:null
            },

        
        })

    }

    getDetailById = (req, res, next) => {
        res.json({
            results: {
            id:"",
            title:"",
            links:"",
            image:"",
            message:"Banner Details",
            meta:null
            } 
        })
    }

    putDetailById = (req, res, next) => {

        res.json({
            results: {
            id:"",
            
            message:"Banner Details",
            meta:null
            }  
        })
    }

    deleteBannerById = (req, res, next) => {
        res.json({
            results: {
            result: null,
            message: "Banner delete",
            meta: null
            }
        })
    }



}


const bannerCtrl = new BannerController()

module.exports = bannerCtrl;