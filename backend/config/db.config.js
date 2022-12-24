module.exports = {
    HOST: "localhost",
    USER: "murilo",
    PASSWORD: "murilo",
    DB: "murilonexia",
    dialect: "postgres",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};