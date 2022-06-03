export type transacao = {
    valor: number,
    data: Date,
    descricao: string,
}


export type UsersBank = {
    name: string,
    cpf: string,
    dataDeNascimento: Date,
    saldoExtrato: number,
    movimentacao: transacao[]
   
}

export let usersBank: UsersBank[] = [
    {
        name: "Maria Eduarda",
        cpf: "11111111111",
        dataDeNascimento: new Date ("2022-20-06"),
        saldoExtrato: 0,
        movimentacao: [{
            valor: 100,
            data:new Date ("2022-06-20"),
            descricao: "Depósito R$ 120,00"
        }]
    },
    {
        name: "Alessandra",
        cpf: "22222222222",
        dataDeNascimento: new Date ("1987-02-14"),
        saldoExtrato: 0,
        movimentacao: [{
            valor: 200,
            data: new Date ("2022-06-22"),
            descricao: "Depósito R$ 150,00"
           
        }]
    },
    {
        name: "Heloísa",
        cpf: "33333333333",
        dataDeNascimento: new Date ("2003-29-10"),
        saldoExtrato: 0,
        movimentacao: [{
            valor: 500,
            data: new Date ("2022-05-12"),
            descricao: "Depósito de R$ 250,00"
        }]
    },
    {
        name: "Matteo",
        cpf: "44444444444",
        dataDeNascimento: new Date ("2017-04-14"),
        saldoExtrato: 0,
        movimentacao: [{
            valor: 200,
            data:  new Date ("2022-06-02"),
            descricao: "Depósito de R$ 50,00"
        }]
    },
    {
        name: "Henrique",
        cpf: "55555555555",
        dataDeNascimento: new Date ("1989-09-07"),
        saldoExtrato: 0,
        movimentacao: [{
            valor: 800,
            data: new Date ("2022-05-10"),
            descricao: "Depósito de R$ 150,00"
        }]
    }

]