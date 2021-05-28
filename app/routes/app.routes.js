module.exports = app => {
    const controller = require("../controllers/app.controllers.js");
    var router = require("express").Router();

    router.get("/store/find/:zip", controller.findStores);
    router.get("/user/login/:username/:password", controller.userLogin);
    router.get("/selection/find/:storeId", controller.findSelection);
    router.get("/order/find/:user", controller.findOrder);
    router.post("/store/create", controller.createStore);
    router.post("/user/create", controller.createUser);
    router.post("/selection/create", controller.createSelection);
    router.post("/order/create", controller.createOrder);


    app.use('/api/app/', router);
}