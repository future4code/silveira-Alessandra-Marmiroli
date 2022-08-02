Exercício 1 

a) Rounds é uma variável que recebe uma propriedade BCRYPT_COST importada através de uma biblioteca que será responsável por criptografar um senha. 
Salt é uma variável que recebe bcrypt e através da função genSalt que recebe por parâmetro rounds. Usei salt genSaltSync(cost) e const cypherText: string = hashSync(plainText, salt)
utileizei esses dois métodos orientados pelo professor na aula. Ao criar no index: 
const hashsManagers = new HashManagers().createHash("batata")
console.log(hashsManagers)
Observei uma mensagem no console: $2a$10$E9mbGI0Q7EBibZMuGL.YXumJyjAOfUxeP2TlprQXpdnfEHFyaIJrW

Exercício 2 

a) Acredito que primeiro devemos modificar p Cadastro do usuário para depois fazer alterações em login. Porque primeiro precisamos dos dados do usuário depois que temos os dados informados dai sim podemos liberar o acesso dele.

b) No endpoint user/profile devemos aderir ao método de criptografia pq passamos no heades authorization.


