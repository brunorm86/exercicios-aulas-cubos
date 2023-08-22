const express = require('express');

const app = express();

const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/professores');

const primeiroIntermediario = (req, res, next) => {
    console.log("Passei no primeiro intermediário");
    next();
};
const segundoIntermediario = (req, res, next) => {
    console.log("Passei no segundo intermediário");
    next();
};

const intermediarioDaRota = (req, res, next) => {
    console.log("Passei no intermediário da rota");
    next();
};

//intermediários independentes. basicamente uma função
//app.use(primeiroIntermediario);
//app.use(segundoIntermediario);

app.listen(3000);

//intermediário da rota
app.get('/professores', segundoIntermediario, intermediarioDaRota, filtrarProfessores);

app.get('/professores/:id', encontrarUmProfessor);


