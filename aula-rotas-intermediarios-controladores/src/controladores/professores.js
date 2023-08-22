const professores = require('../bancodedados');

const filtrarProfessores = (req, res) => {

    console.log("Cheguei no filtrarProfessores");

    const { stack } = req.query;
    let resultado = professores;
    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        })
    }
    res.send(resultado);
};

const encontrarUmProfessor = (req, res) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id == req.params.id;
    });
    res.send(professorEncontrado);
};

module.exports = { filtrarProfessores, encontrarUmProfessor };