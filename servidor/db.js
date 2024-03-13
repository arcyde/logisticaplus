const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    database: 'logistica_teste_pratico',
    host: 'localhost',
    password: '123',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};