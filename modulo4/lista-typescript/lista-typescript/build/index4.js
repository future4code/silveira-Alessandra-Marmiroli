"use strict";
var SETORES;
(function (SETORES) {
    SETORES["MARKETING"] = "marketing";
    SETORES["VENDAS"] = "vendas";
    SETORES["FINANCEIRO"] = "financeiro";
})(SETORES || (SETORES = {}));
const listaFuncionarios = [
    { nome: "Marcos", salario: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: SETORES.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: SETORES.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: SETORES.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: SETORES.MARKETING, presencial: true }
];
const funcionario = [];
function buscarFuncionarios(listaFuncionarios) {
    return listaFuncionarios.filter((funcionario) => {
        return funcionario.setor === SETORES.MARKETING && funcionario.presencial === true;
    });
}
console.log(buscarFuncionarios(listaFuncionarios));
//# sourceMappingURL=index4.js.map