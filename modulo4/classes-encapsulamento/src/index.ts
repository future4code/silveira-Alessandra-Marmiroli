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

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

}
const alessandra = new UserAccount("22233322211", "Alessandra", 35)


// Resposta b) Foi impresso uma vez "Chamando o construtor da classe User". 

// Resposta c) Para acessar as informações privadas podemos usar o método getter para pegar e setters para alterar. 

// EXERCÍCIO 02 

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(novaDescription: string, novoValue: number, novaDate: string) {
        this.description = novaDescription
        this.value = novoValue
        this.date = novaDate
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

const MariaEduarda = new UserAccount("22233322211", "Alessandra", 35)
const novaConta = new UserAccount("123456789", "alessandra", 35)
const novaCompra = new Transaction("20/06/2022", 500, "roupas")
console.log(novaConta, novaCompra)



//exercicio 03 

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

}

const laBank = new Bank([])






