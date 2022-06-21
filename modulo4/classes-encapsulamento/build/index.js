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
    getCpf() {
        console.log(this.cpf);
    }
    getName() {
        console.log(this.name);
    }
    getAge() {
        console.log(this.age);
    }
    getBalance() {
        console.log(this.balance);
    }
    getTransactions() {
        console.log(this.transactions);
    }
    setTransaction(newTransaction) {
        this.transactions.push(newTransaction);
    }
}
const alessandra = new UserAccount("22233352211", "alessandra", 32);
const MariaEduarda = new UserAccount("22233322211", "Maria Eduarda", 30);
class Transaction {
    constructor(description, value, date) {
        this.description = description;
        this.value = value;
        this.date = date;
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
}
const novaConta = new UserAccount("123456789", "alessandra", 35);
const novaCompra = new Transaction("20/06/2022", 500, "roupas");
novaConta.setTransaction(novaCompra);
console.log(novaConta, novaCompra);
//# sourceMappingURL=index.js.map