ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
-- Nesta linha estou adiciona uma coluna na tabela. 
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

DESCRIBE Actor;

-- Resposta letra a) ALTER TABLE Actor DROP COLUMN salary;
-- Altere a tabela Actor remove a coluna salario.alter

-- Resposta letra b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- Altere a tabela Actor mudar campo sexo para varchar campo com 6 caracteres.

-- Resposta letra c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- Altere a tabela Actor mudar gender permanece gender para VARCHAR (255) limitando agora para 255 caracteres. 

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
-- Tabela Actor alterada para limite de 100 caracteres. 

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123";

-- MUDANÇA FEITA EM NAME COM O ID!

UPDATE Actor
SET name = "Fernanda Souza" , birth_date = "1929-10-19"
WHERE id = "003";

-- Exercício 02 - letra a) MUDANÇA FEITA name = "Fernanda Montenegro" através do ID = 003
-- mantendo a respectiva data de nascimento.  

-- Exercício 02 - letra b) b) Escreva uma query que atualize o nome 
-- da atriz Juliana Paes para JULIANA PAES. 
-- Então, escreva outra query para voltar ao nome anterior.

select upper(name) from Actor where name = "Fernanda Souza"; 

select lower(name) from Actor where name = "Fernanda Souza"; 

-- Exercício 02 - letra c) 
UPDATE Actor
SET 
	name = "Tony Starck",
    salary = 600000,
   	birth_date = "2000-01-12",
    gender = "male"
WHERE id = "003";

UPDATE Actor
SET 
	name = "Jhony Deep",
    salary = 1600000,
   	birth_date = "1978-10-28",
    gender = "male"
WHERE id = "000";

SELECT * from Actor;

-- ERRO - 0 linha(s) afetada(s) Linhas correspondidas: 0 - Ele não atualiza algo que não existe e informa.

SET SQL_SAFE_UPDATES = 0;
-- AQUI O COMANDO PARA FAZER O DELETE OU UPDATE

-- EXERCÍCIO 03 - Letra a) 

DELETE FROM Actor WHERE name = "Tony Ramos";


-- b) Escreva uma query que apague todos os atores (do gênero male) com o salário
--  maior do que R$1.000.000,00

SET SQL_SAFE_UPDATES = 0;
-- AQUI O COMANDO PARA FAZER O DELETE OU UPDATE
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

SELECT * from Actor;

-- EXERCÍCIO 04 

-- Resposta letra a) 
SELECT MAX(salary) FROM Actor;
-- Aqui retorno o valor maximo ou seja o salario maior da coluna


-- b) Escreva uma query que pegue o menor salário das atrizes
-- letra b)

SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- c) Escreva uma query que pegue a quantidade de atrizes
SELECT COUNT(*) FROM Actor WHERE gender = "female";


-- d) d) Escreva uma query que pegue a soma de todos os salários


select sum(salary) AS resultado_soma_salarios
 FROM Actor;
 
 -- EXERCICIO 05
 
 SELECT * FROM Actor ORDER BY name ASC;
 
 SELECT * FROM Actor ORDER BY name ASC LIMIT 3;
 
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Fernada Montenegro",
  180000,
  "1948-08-25", 
  "female"
);
-- SELECT MID("SQLTutorial", 5, 3) AS ExtractString;
-- SELECT LENGTH("SQL Tutorial") AS LengthOfString;

-- Exercício 05 

-- letra a)

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- Resposta: Ele devolve uma seleção feita por gênero, mostrando 2 feminino e 2 masculino.

 -- letra b)  
 SELECT id, name FROM Actor
ORDER BY name DESC;
-- retorne somente o id e o nome dos atores em ordem decrescente alfabética

-- letra c) 
SELECT * FROM Actor
ORDER BY salary;
-- retorne todos os atores ordenados pelo salário

-- letra d) 

SELECT * FROM Actor WHERE salary > "180000";

-- letra e) 

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

-- aqui estou selecionando a média do salário através da propriedade AVG na coluna (salary) busca feito por grupo
-- gender

-- EXERCÍCIO 06 

-- letra a) 

ALTER TABLE Films ADD playing_limit_date DATE;

-- letra b) 

ALTER TABLE Films change avaliacao avaliacao FLOAT;  
-- alterando a tabela mudando o campo avaliacao para numeros não inteiros 

-- letra c) c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz 
-- e um que já tenha saído

UPDATE Films name SET date_lancamento = "2022-06-01"
	WHERE id = "003";
    
UPDATE Films name SET playing_limit_date = curdate()
	WHERE id = "003";
    
UPDATE Films name SET playing_limit_date = "2022-06-03"
	WHERE id = "004";
    
-- LETRA D 

DELETE FROM Films WHERE id = "002";

-- DESAFIO 

-- letra a 

SELECT * FROM Films WHERE avaliacao > 7.5;

-- letra b 

SELECT AVG(avaliacao) FROM Films;

-- letra C 

SELECT * FROM Films WHERE playing_limit_date = curdate();

-- letra D 

SELECT * FROM Films WHERE date_lancamento > curdate();

-- letra E 

SELECT max(avaliacao) FROM Films;

-- letra F 
SELECT min(avaliacao) FROM Films;

-- EXERCÍCIO

-- Letra a)

SELECT * FROM Films ORDER BY name ASC;

-- Letra b) 

SELECT * FROM Films ORDER BY name DESC limit 3;

-- letra c) 

SELECT * FROM Films ORDER BY playing_limit_date DESC;

-- letra d)

SELECT * FROM Films ORDER BY avaliacao DESC;









  
SELECT * from Films;
















 
 
 
 
 
 
 
 










 
 


 
 -- Usei o Sum para retornar as somas dos salários , AS resultado_soma_salarios é apenas o nome que se da ao campo 
 -- que se imprime o valor total 
 
 
 
 












 















 



 