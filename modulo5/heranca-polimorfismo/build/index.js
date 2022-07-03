"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Industry = exports.Commerce = exports.Residence = exports.Place = void 0;
class User {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    introduceYourself() {
        return `Olá, sou ${this.name}. Bom dia!`;
    }
}
const goodMorning = new User("001", "ale@ale.com.br", "Alessandra", "123456");
const Alessandra = new User("001", "Alessandra", "ale@ale.com.br", "123456");
console.log(Alessandra);
console.log(goodMorning);
console.log(goodMorning.introduceYourself());
const client = {
    name: "Alessandra",
    registrationNumber: 1,
    consumedEnergy: 200,
    calculateBill: () => {
        return 2;
    },
};
console.log(client.consumedEnergy);
console.log(client.calculateBill());
console.log(client.name);
console.log(client.registrationNumber);
class Place {
    constructor(cep) {
        this.cep = cep;
    }
    getCep() {
        return this.cep;
    }
}
exports.Place = Place;
class Residence extends Place {
    constructor(residentsQuantity, cep) {
        super(cep);
        this.residentsQuantity = residentsQuantity;
    }
}
exports.Residence = Residence;
class Commerce extends Place {
    constructor(floorsQuantity, cep) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
    }
}
exports.Commerce = Commerce;
const metodo = new User("001", "Alessandra", "ale@ale.com.br", "123456");
class Industry extends Place {
    constructor(machinesQuantity, cep) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
    }
}
exports.Industry = Industry;
//# sourceMappingURL=index.js.map