"use strict";
const listaClientes = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Alessandra", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
];
function buscarClienteConsultorio(listaClientes) {
    return listaClientes.sort(function (a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });
}
console.log(buscarClienteConsultorio(listaClientes));
//# sourceMappingURL=index5.js.map