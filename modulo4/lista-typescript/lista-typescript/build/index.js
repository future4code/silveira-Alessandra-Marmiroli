"use strict";
function separarData(nome, dataDeNascimento) {
    const resultado = dataDeNascimento.split("/", 3);
    console.log(`Olá me chamo ${nome}, nasci no dia ${resultado[0]} do mês de ${resultado[1]} do ano de ${resultado[2]}`);
}
separarData("Alessandra", "27/05/2022");
//# sourceMappingURL=index.js.map