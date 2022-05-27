"use strict";
var PeriodoSiglas;
(function (PeriodoSiglas) {
    PeriodoSiglas["AC"] = "AC";
    PeriodoSiglas["DC"] = "DC";
})(PeriodoSiglas || (PeriodoSiglas = {}));
function retornaIdade(ano, periodoSiglas) {
    if (periodoSiglas === "AC") {
        if (ano > 4000) {
            return "Pré-história";
        }
        if (ano <= 4000) {
            return "Idade antiga";
        }
    }
    if (periodoSiglas === "DC") {
        if (ano < 476) {
            return "Idade antiga";
        }
        if (ano >= 476 && ano < 1453) {
            return "Idade media";
        }
        if (ano >= 1453 && ano < 1789) {
            return "Idade Moderna";
        }
        if (ano >= 1789) {
            return "Idade Comtemporânea";
        }
    }
}
console.log(retornaIdade(2022, "DC"));
//# sourceMappingURL=index6.js.map