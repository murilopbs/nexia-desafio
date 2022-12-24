const Pool = require('pg').Pool;
const pool = new Pool({
    user: "murilo",
    host: "localhost",
    database: "murilonexia",
    password: "murilo",
    port: 5432
});


const getUsers = (request, response) => {
    pool.query('SELECT * FROM usuarios ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error;
      }else{
        response.status(200).json(results.rows);
      }
    });
};

const getUserById = (request, response) => {
  const id = parseInt(request.body.id);

  pool.query('SELECT * FROM usuarios WHERE id = $1', [id], (error, results) => {
    if (error) {
      
    }
    response.status(201).send(results.rows);
  });
};

const createUser = (request, response) => {
    var nome = request.body.nome;
    var nascimento = request.body.nascimento;
    var rg = request.body.RG;
    var cpf = request.body.CPF;
    var perfil = request.body.perfil;
  //nome CPF nascimento RG perfil
  pool.query(
    'INSERT INTO usuarios (nome, "CPF", nascimento, "RG", perfil) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [nome, cpf, nascimento, rg, parseInt(perfil)],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateUser = (request, response) => {
  var nome = request.body.nome;
    var nascimento = request.body.nascimento;
    var rg = request.body.RG;
    var cpf = request.body.CPF;
    var perfil = request.body.perfil;
    var id = request.body.id;

  pool.query(
    'UPDATE usuarios SET nome = $1, nascimento = $2, "RG" = $3, "CPF" = $4, perfil = $5 WHERE id = $6',
    [nome, nascimento, rg, cpf, perfil, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  //const id = parseInt(request.params.id);
  var id = request.body.id;

  pool.query('DELETE FROM usuarios WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const createApp = (request, response) => {
  var nome = request.body.nome;
  var perfil = request.body.perfil;
  //nome CPF nascimento RG perfil
  pool.query(
    'INSERT INTO apps (nome, perfil) VALUES ($1, $2) RETURNING *',
    [nome, parseInt(perfil)],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`App added with ID: ${results.rows[0].id}`);
    }
  );
};

const getAppByPerfil = (request, response) => {
  const perfil = parseInt(request.body.perfil);

  pool.query('SELECT * FROM apps WHERE perfil = $1', [perfil], (error, results) => {
    if (error) {
      
    }
    response.status(201).send(results.rows);
  });
};

const getAppById = (request, response) => {
  const id = parseInt(request.body.id);

  pool.query('SELECT * FROM apps WHERE id = $1', [id], (error, results) => {
    if (error) {
      
    }
    response.status(201).send(results.rows);
  });
};

const getApps = (request, response) => {
  pool.query('SELECT * FROM apps ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }else{
      response.status(200).json(results.rows);
    }
  });
};

const deleteApp = (request, response) => {
  //const id = parseInt(request.params.id);
  var id = request.body.id;

  pool.query('DELETE FROM apps WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const updateApp = (request, response) => {
  var nome = request.body.nome;
  var perfil = request.body.perfil;
  var id = request.body.id;

  pool.query(
    'UPDATE apps SET nome = $1, perfil = $2 WHERE id = $3',
    [nome, perfil, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User modified with ID: ${id}`);
    }
  );
};

const getUsersByPerfil = (request, response) => {
  const id = parseInt(request.body.perfil);

  pool.query('SELECT * FROM usuarios WHERE perfil = $1', [id], (error, results) => {
    if (error) {
      
    }
    response.status(201).send(results.rows);
  });
};

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    createApp,
    getAppByPerfil,
    getApps,
    deleteApp,
    updateApp,
    getAppById,
    getUsersByPerfil,
};