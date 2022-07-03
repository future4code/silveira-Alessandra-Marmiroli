//EXERCÍCIO 01 

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
      
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      
      public introduceYourself():string{
        return `Olá, sou ${this.name}. Bom dia!`
      }
  }
  const goodMorning = new User ("001","ale@ale.com.br","Alessandra", "123456")
  const Alessandra = new User("001", "Alessandra","ale@ale.com.br", "123456")
  console.log(Alessandra)
  console.log(goodMorning)
  console.log(goodMorning.introduceYourself())
  //Resposta da letra a) Inserindo apenas os três campos não foí exigido o campo da senha após informado foi impresso no terminal. 

  //Resposta da letra) No meu terminal a mensagem "Chamando o constructor da classe User" foi impresso uma vez. 

  //EXERCÍCIO 02 

//   class Customer extends User {
//     public purchaseTotal: number = 0;
//     private creditCard: string;
  
//     constructor(
//       id: string,
//       email: string,
//       name: string,
//       password: string,
//       creditCard: string
//     ) {
//       super(id, email, name, password);
//       console.log("Chamando o construtor da classe Customer");
//       this.creditCard = creditCard;
//     }
  
//     public getCreditCard(): string {
//       return this.creditCard;
//     }
//   }

  //Resposta da letra a) No meu terminal a mensagem "Chamando o constructor da classe User" foi impresso duas vezes. 
//   const MariaEduarda = new Customer ("002", "MariaEduarda","ale@ale.com.br", "222222", "500")
//   console.log(MariaEduarda)

  //Resposta da letra b) Imagino que a cada vez que invocamos o método construtor como temos um constructor dentro USER e dentro Customer ele imprimi então duas vezes. 

  // EXERCÍCIO 03

  //Resposta da letra a) Sim tudo foi impresso inclusive a senha pq infelizmente a senha não é private.

  // EXERCÍCIO 04 

  //Resposta feito na linha 34 e 35 e linha 42!!!

  //POLIMORFISMO 

  //Resposta letra a) Foi possível imprimir todos, 

    interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

    const client: Client = {
    name: "Alessandra", 
    registrationNumber: 1,
    consumedEnergy: 200, 
    calculateBill: () => {
        return 2;
    },
    
  }

  console.log(client.consumedEnergy)
  console.log(client.calculateBill())
  console.log(client.name)
  console.log(client.registrationNumber)

  //EXERCÍCIO 02 CLASS PLACE 

  export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

//   const abstractPlace = new Place ("001", "Alessandra","ale@ale.com.br", "123456")

  //Resposta da letra a) Não é possível criar uma instância de uma classe abstrata. 

  // Resposta da letra b) Acredito que temos que criar um método public abstract void e chamar uma função. 
  
  // EXERCÍCIO 03 

  //1) Respondida na letra b acima. 

  //2) Interface ela é um objeto. 

  // 3) Ela contém dados genéricos protegidos pelo método protected. 

  export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  }
  const metodo = new User("001", "Alessandra","ale@ale.com.br", "123456")

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }
  }




























