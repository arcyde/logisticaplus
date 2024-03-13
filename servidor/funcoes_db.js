const pool = require('./db');

async function criarTabela() {
    try {
        const query = `
                drop table if exists clientes;
                CREATE TABLE IF NOT EXISTS clientes (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                telefone VARCHAR(20),
                locatex int,
                locatey int)
        `;
        await pool.query(query);
        console.log('Tabela criada com sucesso!');
    } catch (err) {
        console.error('Erro ao criar a tabela:', err);
    }
}

criarTabela();