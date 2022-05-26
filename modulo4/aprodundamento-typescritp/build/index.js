"use strict";
const minhaString = "Alessandra";
console.log(minhaString);
const meuNumero = 185;
const meuNumero2 = "Alessandra";
console.log(meuNumero, meuNumero2);
var ClassColors;
(function (ClassColors) {
    ClassColors["VIOLETA"] = "Violeta";
    ClassColors["ANIL"] = "Anil";
    ClassColors["AZUL"] = "Azul";
    ClassColors["VERDE"] = "Verde";
    ClassColors["AMARELO"] = "Amarelo";
    ClassColors["LARANJA"] = "Laranja";
    ClassColors["VERMELHO"] = "Vermelho";
})(ClassColors || (ClassColors = {}));
const people = [];
const person1 = {
    name: "Alessandra",
    age: 35,
    favouriteColour: ClassColors.VERMELHO
};
const person2 = {
    name: "Matteo",
    age: 7,
    favouriteColour: ClassColors.VIOLETA
};
const person3 = {
    name: "Heloísa",
    age: 9,
    favouriteColour: ClassColors.LARANJA
};
people.push(person1);
people.push(person2);
people.push(person3);
console.log(people);
//# sourceMappingURL=index.js.map