![header](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIpUr7M1EQdh0M0DHBtBvgWohu2mznmSCOw&usqp=CAU)

# Projeto Cookenu
<tr>

### Projeto inspirado em uma rede social na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado.

Esse projeto foi realizado com muita dedicação, e dividido em algumas partes: 

1. **Cadastro**
    
    Como o projeto está no início, o usuário só precisa informar: o e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 caracteres.

2. **Login**

    Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. Os endpoints de login e cadastro devem retornar um token.

3. **Informações do próprio perfil**

    A partir do token de autenticação fornecido no login, o usuário deve ser capaz de ver as suas informações não sensíveis salvas no banco (id e email).

4. **Criar Receitas**

    O usuário deve poder criar uma receita. A receita deve ter os seguintes atributos: título, descrição/modo de preparo e data de criação. 

5. **Seguir usuário**

    Um usuário deve poder seguir outros usuários. Para isso, ele deve fornecer o id do usuário que deseja seguir. Atente-se que essa funcionalidade se assemelha ao do instagram: um usuário seguir outro, não significa que "esse outro" está seguindo o primeiro.

6. **Feed**
    
    Um usuário deve poder visualizar as receitas criadas pelos usuários que ele segue. As receitas devem estar ordenadas pela data de criação.


### Tecnologias utilizadas: 
<tr>

+ Node.js
+ Typescritp
+ MySql 
+ Programação orientada à Objetos 
+ Request.Rest
+ Git

### Linguagens e libs utilizadas: 
<tr>

+ Typescritp 
+ MySql 
+ dotenv 
+ express
+ knex 
+ bcryptjs 
+ uuid 
+ jsonwebtoken 

### Endpoints realizados 

+ Criar um usuário (POST)
+ Fazer o login (POST)
+ Perfil do usuário (GET)
+ Ver o perfil do usuário (GET)
+ Criar uma receita (POST)
+ Ver uma receita  (GET)









