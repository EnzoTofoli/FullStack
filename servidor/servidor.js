//require("colors");

//console.log("IMAGINATION".rainbow);

var http = require('http');
var express = require('express');
var app = express();
const path = require('path');

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', './views');

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Projects.html'));
});

// Rota para a página de cadastro
app.get('/cadastra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Cadastro.html'));
});

// Rota para a página de login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});

// Middleware para ler dados dos formulários
app.use(express.urlencoded({ extended: true }));

// POST do formulário de cadastro
app.post('/cadastra', (req, res) => {
    const { usuario, senha } = req.body;
    res.render('resposta', { mensagem: `Usuário ${usuario} cadastrado com sucesso!` });
});

// POST do formulário de login
app.post('/logar', (req, res) => {
    const { usuario, senha } = req.body;
    if (usuario === 'admin' && senha === '1234') {
        res.render('resposta', { mensagem: 'Login bem-sucedido!' });
    } else {
        res.render('resposta', { mensagem: 'Usuário ou senha inválidos.' });
    }
});

var server = http.createServer(app);
server.listen(80);

console.log("servidor rodando...");