const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "lastname1lastname2"
});

module.exports = pool;