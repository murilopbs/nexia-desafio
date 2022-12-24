# nexia-desafio

# Enunciado
Essa etapa consiste na implementação de um caso de uso, no qual avaliaremos seus conhecimentos técnicos.

Deve ser implementado um CRUD com todas as operações relacionadas e persistida em banco de dados. Deve atender o seguinte cenário.

Uma pessoa está associada a vários aplicativos por meio de um perfil de acesso.
Pessoa deve conter, CPF, nome, data de nascimento e RG.
Os perfis serão, usuário comum, gestor e administrador.
Aplicativo deve conter nome e id.
Atenção para os relacionamentos entre as entidades.

Será necessário enviar também o MER.

Requisitos técnicos:

Backend Node;
Frontend Angular;
Banco de dados: Postgres, MySQL ou MongoDb;

# Pré-requisitos

- Tenha instalados em sua máquina:
  - Node.js
  - Angular
  - Postgres
  - Um editor de código
  - O diretório da aplicação disponível no GitHub

# Configuração do Postgres

- Com o postgre instalado, entre no terminal do prompt do postgre e logue como sudo.
- Crie um banco chamado murilonexia e depois um usuário "murilo" com senha "murilo" usando o comando: 
  - ```create database murilonexia;```
  - ```create user murilo with encrypted password 'murilo';```
- Garanta alguns privilégios para o usuário murilo:
  - ```grant all privileges on database murilonexia to murilo;```
  - ```GRANT USAGE, SELECT ON SEQUENCE usuarios_id_seq TO murilo;```
- Agora criaremos as tabelas necessárias:
  - ```
    CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    "CPF" character varying(255) NOT NULL,
    nascimento character varying(255) NOT NULL,
    "RG" character varying(255) NOT NULL,
    perfil integer NOT NULL);
  - ```
    CREATE TABLE public.apps (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    perfil integer NOT NULL);
    ```

# Configuração do Node.js
- Baixe as seguintes dependências no diretório raiz do projeto:
  - ```
    npm install pg
    npm install express
    npm install cors
    npm install pg-hstore
    npm install sequelize
    npm install body-parser
    ```
    
# Configuração do Angular
- Entre no diretório "frontendd" e rode o comando:
  - ```npm install```

# Rodando o projeto
- Entre no diretório raiz do projeto e rode o comando:
  - ```node index.js```
- Entre no diretório "frontendd" e rode o comando:
  - ```ng serve -o```

# Considerações
- Deixe a porta 3000 livre para o backend (node.js)
- Deixe a porta 4200 livre para o frontend (angular)
- Deixe a porta 5432 livre para o banco de dados (postgres)
- Infelizmente, algo aconteceu com o diretório "frontend" na hora de enviar para o GitHub, os arquivos do frontend est
    
