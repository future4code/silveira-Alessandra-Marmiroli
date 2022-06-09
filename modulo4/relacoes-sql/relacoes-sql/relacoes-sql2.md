CREATE TABLE MovieCast (
		Films_id VARCHAR(255),
		Actor_id VARCHAR(255),
    FOREIGN KEY (Films_id) REFERENCES Films(id),
    FOREIGN KEY (Actor_id) REFERENCES Actor(id)
);

-- Resposta a) Existe aqui uma tabela com nome de MovieCast a mesma esta correspondendo a dados da tabela 
-- Films_id e Actor_id se referenciando através da chave estrangeira "FOREIGN KEY".

-- Resposta b) Crie, ao menos, 6 relações nessa tabela 

SELECT * FROM MovieCast;

INSERT INTO MovieCast(Films_id, Actor_id)
VALUES(
	"001",
    "002"
);
INSERT INTO MovieCast(Films_id, Actor_id)
VALUES(
	"001",
    "006"
);

-- C - feito no exercício anterior 

-- letra d) Tente apagar um ator que possua uma relação nessa tabela. 
-- Anote e explique o resultado da query

DELETE FROM Actor WHERE id = "002";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails 
-- (`silveira-21814672-alessandra-marmiroli`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY 
-- (`Actor_id`) REFERENCES `Actor` (`id`))

-- EXERCÍCIO 03 

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- Resposta letra a) O Operador On seria a condição. 

-- Resposta letra b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos 
-- filmes que já foram avaliados

INSERT INTO MovieCast(Films_id, Actor_id)
VALUES(
	"001",
    "006"
);

SELECT name, id, avaliacao 
FROM MovieCast
JOIN Films
ON MovieCast.Films_id = Films.id;





