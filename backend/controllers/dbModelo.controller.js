const db = require("../models");
const dbModelo = db.dbModelo;
const Op = db.Sequelize.Op;


// CRIANDO UM NOVO USUÁRIO
exports.create = (req, res)=> {
    console.log("Conseguiu");
    // Validando o request
    /*if(!req.body.nome) {
        res.status(400).send({
            message: "Sem nome"
        });
        return;
    }*/
    // CRIANDO O USUÁRIO
    /*const dbmodelo = {
        nome: req.body.nome,
        CPF: req.body.cpf,
        nascimento: req.body.nascimento,
        RG: req.body.RG,
        perfil: req.body.perfil
    }*/
    /*const dbmodelo = {
        nome: "murilo",
        CPF: "000.000.000-71",
        nascimento: "10/03/2002",
        RG: "3.356.181",
        perfil: 1
    }

    // SALVANDO NO BANCO
    dbModelo.create(dbmodelo).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocorreu algum erro criando o dbModelo."
        });
    });*/
};

// RETORNANDO TODOS OS USUÁRIOS

exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;
  
    dbModelo.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// ENCONTRANDO UM USUÁRIO PELO ID
exports.findOne = (req, res) => {

};

// ATUALIZANDO USUÁRIO PELO ID

exports.update = (req, res) => {

};

// DELETANDO UM USUÁRIO PELO ID

exports.delete = (req, res) => {

};

// DELETANDO TODOS OS USUÁRIOS

exports.deleteAll = (req, res) => {

};

