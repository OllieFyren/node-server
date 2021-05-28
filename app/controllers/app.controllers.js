const db = require("../models");
const User = db.user;
const Store = db.store;
const Selection = db.selection;
const Order = db.order;
const Op = db.Sequelize.Op;

exports.findStores = (req, res) => {
    const zipCode = req.params.zip;
    Store.findAll({where: {storeZip: zipCode}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error when finding stores."
            });
        });
};
exports.createStore = (req, res) => {
    const store = {
        storeName: req.body.storeName,
        storeZip: req.body.storeZip,
        storeAddress: req.body.storeAddress,
    };
    Store.create(store)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error when creating stores."
            });
        });
};
exports.userLogin = (req, res) => {
    const user = {
        username: req.params.username,
        password: req.params.password
    };
    User.findAll({where: {username: user.username, password: user.password}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Wrong username or password."
            });
        });
};
exports.createUser = (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error when creating stores."
            });
        });
};
exports.findSelection = (req, res) => {
    const store = req.params.storeId;
    Selection.findAll({where: {storeId: store}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error when finding selection."
            });
        });
};
exports.createSelection = (req, res) => {
    const selection = {
        storeId: req.body.store,
        firstFlavour: req.body.firstFlavour,
        secondFlavour: req.body.secondFlavour,
        thirdFlavour: req.body.thirdFlavour,
        fourthFlavour: req.body.fourthFlavour,
        fifthFlavour: req.body.fifthFlavour,
        sixthFlavour: req.body.sixthFlavour,
        seventhFlavour: req.body.seventhFlavour,
        eighthFlavour: req.body.eighthFlavour
    };
    Selection.create(selection)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error when creating selection."
            });
        });
};
exports.findOrder = (req, res) => {
    const user = req.params.user;
    Order.findAll({where: {userId: user}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error when finding orders."
            });
        });
};
exports.createOrder = (req, res) => {
    const order = {
        userId: req.body.userId,
        firstChoice: req.body.firstChoice,
        secondChoice: req.body.secondChoice,
        thirdChoice: req.body.thirdChoice,
        firstTopping: req.body.firstTopping,
        secondTopping: req.body.secondTopping
    };
    Order.create(order)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error when creating order."
            });
        });
};
