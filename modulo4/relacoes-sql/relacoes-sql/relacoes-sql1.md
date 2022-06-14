CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    Films VARCHAR(255),
    FOREIGN KEY (Films) REFERENCES Films(id)
);

-- Resposta letra a) Chave estrangeira é a propriedade usada com nome de FOREIGN KEY que se referencia a uma 
-- PRIMARY KEY e se conecta através dessa chave à dados que estão presentes em outra tabela. 

-- Resposta letra B) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
-- Tabela criada acima!

INSERT INTO Rating (id, comment, rate, Films) 
VALUES (
	"001",
    "Muito bom!",
	7,
	"004"
);

-- Resposta letra C) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). 
-- Anote e explique o resultado da query.

INSERT INTO Rating (id, comment, rate, Films) 
VALUES (
	"009",
    "Muito bom!",
	7,
	"009"
);
-- Explicando o resultado da Query!
-- Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha, relacionda
-- a Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`Films`) REFERENCES `Films` ( `id`)). 
-- O id informada acima não esta relacionada a Tabela de Films.  

-- Resposta letra d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

ALTER TABLE Films DROP COLUMN rating;
ALTER TABLE Movie DROP COLUMN rating;
-- Não existe coluna rating na tabela de Films e sim rate na tabela Rating, esta confuso isso. 

SELECT * FROM Films;
SELECT * FROM Rating;

