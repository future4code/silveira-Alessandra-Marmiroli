export class CustomError extends Error {
    constructor(
        public statusCode:number, 
        message:string
    ){
        super(message);
    }
}
//Criando uma class de Error que reescreve a classe de Error para que ela também receba um statusCode. 