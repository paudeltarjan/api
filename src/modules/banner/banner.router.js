const bannerRouter = require("express").Router()
const bannerCtrl = require("./banner.controller")
const checklogin = require("../../middlewares/auth.middleware");
const allowUser = require("../../middlewares/rbac.middleware");





// BannerRouter.use(checklogin)

    bannerRouter.route("/")
    .post(allowUser,bannerCtrl.BannerCreate)
    .get(bannerCtrl.listAllBanner)

    bannerRouter.route("/:id")
    .get(bannerCtrl.getDetailById)
    .put(bannerCtrl.putDetailById)
    .delete(bannerCtrl.deleteBannerById)



    
    module.exports = bannerRouter;

