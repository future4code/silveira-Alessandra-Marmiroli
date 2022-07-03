//EXERCÍCIO 01 

//Resposta a) O construtor é um método onde toda classe possui um constructor, se esse não for informado ficará vazio. Deve sempre ser declarado como função, usado para situações que pode criar um padrão de igualdade de dados/informações.  

//Resposta b) 

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
    
    constructor(cpf: string,name: string,age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf(): void {
        console.log(this.cpf)
    }

    public getName(): void {
        console.log(this.name)
    }

    public getAge(): void {
        console.log(this.age)
    }
    public getBalance(): void {
        console.log(this.balance)
    }

    public getTransactions(): void {
        console.log(this.transactions)
    }
    public setTransaction(
        newTransaction: Transaction
    ){
        this.transactions.push(newTransaction)
    }


}
const alessandra = new UserAccount("22233352211", "alessandra", 32)
const MariaEduarda = new UserAccount("22233322211", "Maria Eduarda", 30)


// Resposta b) Foi impresso uma vez "Chamando o construtor da classe User". 

// Resposta c) Para acessar as informações privadas podemos usar o método getter para pegar e setters para alterar. 

// EXERCÍCIO 02 

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value
        this.date = date
    }

    public pegarDescription(): void {
        console.log(this.description)
    }

    public pegarValue(): void {
        console.log(this.value)
    }

    public pegarDate(): void {
        console.log(this.date)
    }


}

const novaConta = new UserAccount("123456789", "alessandra", 35)

const novaCompra = new Transaction("20/06/2022", 500, "roupas")

novaConta.setTransaction(novaCompra)
console.log(novaConta, novaCompra)



//exercicio 03 

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }
}



const laBank = new Bank([])






