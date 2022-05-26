"use strict";
function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
console.log(obterEstatisticas([1, 10, 5, 4]));
//# sourceMappingURL=index2.js.map