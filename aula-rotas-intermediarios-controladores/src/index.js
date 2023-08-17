const express = require('express');

const app = express();

const professores = [
    {
        id: 1,
        nome: "Guido",
        stack: "Backend"
    },
    {
        id: 2,
        nome: "Bruno",
        stack: "Frontend"
    },
    {
        id: 3,
        nome: "Diego",
        stack: "Fullstack"
    },
    {
        id: 4,
        nome: "Astrogildo",
        stack: "UX"
    }
];

app.listen(3000);

app.get('/professores', (req, res) => {
    res.send(professores);
});

app.get('/professores/:id', (req, res) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id == req.params.id;
    });
    res.send(professorEncontrado);
})