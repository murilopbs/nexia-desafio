module.exports = (sequelize, Sequelize) => {
    const dbModelo = sequelize.define("usuarios", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      CPF: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nascimento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      RG: {
        type: Sequelize.STRING,
        allowNull: false
      },
      perfil: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  
    return dbModelo;
  };