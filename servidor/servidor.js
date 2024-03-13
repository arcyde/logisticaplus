const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3500;
const pool = require('./db');
const findShortestRoute = require('./shortestRoute.js');

app.use(express.json());
app.use(cors());

app.get('/clientes', (req, res) => {
    pool.query('SELECT * FROM clientes')
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            console.error('Erro ao buscar clientes', err);
            res.status(500).send('Erro ao buscar clientes');
        });
});

app.get('/clientes/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM clientes where id = $1', [id])
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            console.error('Erro ao buscar clientes', err);
            res.status(500).send('Erro ao buscar clientes');
        });
});

app.post('/clientes', (req, res) => {
    const { nome, email, telefone, locatex, locatey } = req.body;
    pool.query('INSERT INTO clientes (nome, email, telefone, locatex, locatey) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nome, email, telefone, locatex, locatey])
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            console.error('Erro ao cadastrar cliente', err);
            res.status(500).send('Erro ao cadastrar cliente');
        });
});

app.patch('/clientes/:id', (req, res) => {
    const id = req.params.id;
    const { nome, email, telefone, locatex, locatey } = req.body;
    pool.query('UPDATE clientes SET nome = $1, email = $2, telefone = $3, locatex = $4, locatey = $5 WHERE id = $6 RETURNING *', [nome, email, telefone, locatex, locatey, id])
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            console.error('Erro ao atualizar cliente', err);
            res.status(500).send('Erro ao atualizar cliente');
        });
});

app.delete('/clientes/:id', (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM clientes WHERE id = $1', [id])
        .then(() => {
            res.status(204).send({});
        })
        .catch(err => {
            console.error('Erro ao deletar cliente', err);
            res.status(500).send('Erro ao deletar cliente');
        });
});

app.post('/calcular-rota', (req, res) => {
    const rota = req.body;
    const result = findShortestRoute(rota);
    console.log(result)
    res.json(result);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});