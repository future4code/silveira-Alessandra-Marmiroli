"use strict";
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}
const alessandra = new UserAccount("22233322211", "Alessandra", 35);
class Transaction {
    constructor(novaDescription, novoValue, novaDate) {
        this.description = novaDescription;
        this.value = novoValue;
        this.date = novaDate;
    }
    pegarDescription() {
        console.log(this.description);
    }
    pegarValue() {
        console.log(this.value);
    }
    pegarDate() {
        console.log(this.date);
    }
    alterarDescription(novaDescription) {
        this.description = novaDescription;
    }
    alterarDate(novoDate) {
        this.value = novoDate;
    }
    alterarValue(novoValue) {
        this.value = novoValue;
    }
}
const MariaEduarda = new UserAccount("22233322211", "Alessandra", 35);
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}
const novaConta = new UserAccount("123456789", "alessandra", 35);
const novaCompra = new Transaction("20/06/2022", 500, "roupas");
console.log(novaConta, novaCompra);
//# sourceMappingURL=index.js.map