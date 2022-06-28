Exercício 01 

a) Sim concordo plenamente pois ele é um Identificador unico conhecido como UUID formado por 36 caracteres hexadecimais(letras e numeros), ou seja cinco grupos separados por hífen seguindo um padrão 8-4-4-4-12. Dessa forma é necessário que o ID seja representado por uma string. 

Exercício 02 

a) const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

Explicando o código acima: criamos uma váriavel com o nome userTableName que recebe uma tabela criada no banco de dados MySql "User" essa receberá od seguintes critérios Id campo que será gerado de forma automática, email que o usuário irá cadastrar e password senha cadastrada pelo usuário.  Em segui através da variável connection nos conectamos ao Knex que nos possiblita enviar nossas informações para ter acesso aos dados cadastrados no MySql. 

Então seguido com uma variável que criaUsuário recebendo pelo parâmetro os critérios informados acima se conecta ao banco de dados e possibilita fazer uma inserção de id, email, password em userTableName que seria a variável que recebe a tabela "User " do banco de dados.  

Exercício 03 

a) A linha as string é uma forma de "garantir" que os dados que serão recebido através do process.env.JWT_KEY (token) seja uma string, pois esse código será uma mistura de letras e números.  

Exercício 07 

a) Acredito que essa propriedade ANY recebe qualquer valor de resposta então ela poderia receber qualquer informação de numeros e letras vindo do token. 





