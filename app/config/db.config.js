module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "091195",
    DB: "synopsis",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };