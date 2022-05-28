"use strict";
const clientesBanco = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
function bancoDigital(clientesBanco) {
    for (var i = 0; i < clientesBanco.length; i++) {
        const debitosDoCliente = clientesBanco[i].debitos;
        const novoSaldoTotal = debitosDoCliente.reduce((total, numero) => total - numero, clientesBanco[i].saldoTotal);
        if (novoSaldoTotal < 0) {
            console.log(`{ cliente: ${clientesBanco[i].cliente}, saldoTotal: ${novoSaldoTotal}, debitos: [] }`);
        }
    }
}
bancoDigital(clientesBanco);
//# sourceMappingURL=index6.js.map