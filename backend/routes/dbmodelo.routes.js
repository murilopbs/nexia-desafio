module.exports = app => {
    const dbmodelo = require("../controllers/dbModelo.controller.js");

    var router = require("express").Router();

    // CRIANDO UM NOVO USUÁRIO
    router.get("/", dbmodelo.create);

    // LISTANDO TODOS OS USUÁRIOS
    //router.get("/", dbmodelo.findAll);

    app.use('/api/', router);
}