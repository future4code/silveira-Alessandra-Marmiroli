export default class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ){}
}
//Explicação de Murilo sobre as funções que dão acesso à class

// getId = () => {
//     return this.id
// }
// getName = () => {
//     return this.name
// }
// getEmail = () => {
//     return this.email
// }
// getPassword = () => {
//     return this.password
// }