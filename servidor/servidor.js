//require("colors");

//console.log("IMAGINATION".rainbow);

var http = require('http');
var express = require('express');
var app = express();
const path = require('path');

const usuarios = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/cadastra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.use(express.urlencoded({ extended: true }));

app.post('/cadastra', (req, res) => {
    const { usuario, senha } = req.body;

    const existe = usuarios.find(u => u.usuario === usuario);
    if(existe){
        return res.render('resposta',{ mensagem: `Usuário ${usuario} já existe.`});
    }
    usuarios.push({ usuario, senha });
    res.render('resposta', { mensagem: `Usuário ${usuario} cadastrado com sucesso!` });
});

app.post('/logar', (req, res) => {
    const { usuario, senha } = req.body;

    const encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (encontrado) {
        res.render('resposta', { mensagem: 'Login bem-sucedido!' });
    } else {
        res.render('resposta', { mensagem: 'Usuário ou senha inválidos.' });
    }
});

var server = http.createServer(app);
server.listen(80);

console.log("servidor rodando...");