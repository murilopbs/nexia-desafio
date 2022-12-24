const express = require('express');
const db = require('./backend/banco/banco.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, response) => {
    response.send('Node.js, Express, and Postgres API' );
  });

  app.get('/users', db.getUsers);
  app.post('/userId', db.getUserById);
  app.post('/criar', db.createUser);
  app.post('/remover', db.deleteUser);
  app.put('/editar', db.updateUser);
  app.get('/apps', db.getApps);
  app.post('/criarApp', db.createApp);
  app.post('/removerApp', db.deleteApp);
  app.post('/appId', db.getAppById);
  app.put('/editarApp', db.updateApp);
  app.post('/appPerfil', db.getAppByPerfil);
  app.post('/usersPerfil', db.getUsersByPerfil);

  app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });