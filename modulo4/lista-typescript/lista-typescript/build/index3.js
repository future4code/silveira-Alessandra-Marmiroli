"use strict";
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
const filmeInforma = (nomeDoFilme, anoDeLancamento, generoDoFilme, pontuacao) => {
    if (typeof pontuacao !== "undefined") {
        return { nomeDoFilme, anoDeLancamento, generoDoFilme, pontuacao };
    }
    return { nomeDoFilme, anoDeLancamento, generoDoFilme };
};
console.log(filmeInforma("Duna", 2021, GENERO.ACAO, 74));
console.log(filmeInforma("Duna", 2021, GENERO.ACAO));
//# sourceMappingURL=index3.js.map