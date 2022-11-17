const express = require('express');

const server = express();

server.use(express.json());

const dados = ['nome', 'idade', 'cpf', 'nasc', 'rg'];

//Retorna um dado 
server.get('/dados/:index', (req, res) => {
    const { index } = req.params

    return res.json(dados[index])
});


//Retornar todos os dados
server.get('/dados', (req, res) => {
    return res.json(dados)
})


//Adicionar um novo dado
server.post('/dados', (req, res) => {
    const { name } = req.body;
    dados.push(name);

    return res.json(dados)
})


//Atualizar dados
server.put('/dados/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    dados[index] = name;
    return res.json(dados);
})

//Deletar um dado
server.delete('/dados/:index', (req, res) => {
    const { index } = req.params;

    dados.splice(index, 1);
    return res.json({ message: 'o dado foi deletado ' });
})




server.listen(3000);