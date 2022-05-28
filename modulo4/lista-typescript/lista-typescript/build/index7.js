"use strict";
const produtosDaEmpresa = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];
const ajustaPreco = (preco) => {
    const valorAjustado = preco.toFixed(2).replace('.', ',');
    return "R$ " + valorAjustado;
};
function corrigePreco(produtosDaEmpresa) {
    for (var i = 0; i < produtosDaEmpresa.length; i++) {
        const novoValor = produtosDaEmpresa[i].valorUnitario;
        const precoAjustado = (ajustaPreco(novoValor));
        console.log(`{ nome: ${produtosDaEmpresa[i].nome}, quantidade: ${produtosDaEmpresa[i].quantidade}, valor unitário: ${precoAjustado} }`);
    }
}
corrigePreco(produtosDaEmpresa);
//# sourceMappingURL=index7.js.map