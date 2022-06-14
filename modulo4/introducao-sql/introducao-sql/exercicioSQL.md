CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW databases;
SHOW TABLES;
DESCRIBE Actor;
-- Resposta a) Varchair uma variável declarada que recebe uma string com uma chave primary Key esta chave indica um campo de identificação do usuário. Já o Not Null é que não pode haver um campo vazio. Date representa a data que vem em formato americano. 
-- Resposta b) O comando Database me retornou informações_schema sobre minha pasta silveira-21814672-alessandra-marmiroli. SHOW TABLES me retorna o nome da tabela. 
-- Resposta c) O comando DESCRIBE Actor me retorna o formato da tabela com os seus valores definidos inicialmente em sua estrutura. 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
-- Exercício 02 - Resposta b) Erro gerado Entrada duplicada '002' para chave 'PRIMARY', esse erro aconteceu devido a tentativa de inserir o mesmo usuário já cadastrado. 
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- Exercício 02 - Resposta c) Erro gerado Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores. Faltou passar os parametros birth_date, gender.
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- Exercício 03 - Resposta d) Código de erro: 1364. O campo 'nome' não tem um valor padrão. Este erro foi gerado devido a falta de informação do campo name. 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- Exercício 03 - Resposta e) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' indicou erro na data. 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
SELECT * FROM Actor;
SELECT id, name from Actor WHERE gender = "male";
SELECT id, name from Actor WHERE gender = "female";

SELECT id, name from Actor WHERE id = "004";

SELECT salary, name from Actor  WHERE name LIKE "To%";

SELECT gender from Actor  WHERE gender LIKE "invalid";

-- O Resultado foi zero pois não existe essa informação nos campos. 

SELECT id, name, salary from Actor  WHERE salary <= "500000";

SELECT id, nome from Actor WHERE id = "002";

-- Exercício 03 - letra e) Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' Não existe o campo nome e sim name!.

-- cujos nomes começam com "A" AND "J" - busca
-- cujos salários são maiores do que R$300.000

SELECT name, salary from Actor WHERE name LIKE "A%" OR name Like "J";

SELECT name, salary from Actor WHERE name LIKE "A%" OR name Like "J" AND salary > "300000";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- Resposta letra a) A Query acima seleciona dados da tabela Actor fazendo uma primeira verificação que entre entre parenteses
-- O Like nos possibilita receber dois caracteres, como foi feito no exemplo acima.

-- Resposta letra b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > "350000";

-- Resposta letra c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 

SELECT name from Actor WHERE name LIKE "G%" OR name Like "%g%";

-- d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no 
-- nome e o salário entre R$350.000,00 e R$900.000,00

SELECT * FROM Actor WHERE (name LIKE "A" OR "a" AND "g" OR "G") AND salary BETWEEN 350000 AND 900000;
























