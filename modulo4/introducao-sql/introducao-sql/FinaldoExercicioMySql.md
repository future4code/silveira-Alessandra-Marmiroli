CREATE TABLE Films (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    date_lancamento DATE NOT NULL,
    avaliacao VARCHAR(6) NOT NULL
);
INSERT INTO Films (id, name, sinopse, date_lancamento, avaliacao)
VALUES(
  "001", 
  "Se eu fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);
INSERT INTO Films (id, name, sinopse, date_lancamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
);
INSERT INTO Films (id, name, sinopse, date_lancamento, avaliacao)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  "08"
);
INSERT INTO Films (id, name, sinopse, date_lancamento, avaliacao)
VALUES(
  "004", 
  "Hermanoteu na terra de godah",
  "Depois de ser eleito o novo papa, o Cardeal Gerônimo toma conhecimento formal de um grande segredo, mantido em total sigilo durante anos pela Igreja. Enquanto descobre a verdade a respeito dos apóstolos de Cristo, ele tem como fio condutor o destemido Hermanoteu, que ao longo de sua vida participou de momentos históricos e bíblicos cruciais, sempre se metendo nas piores enrascadas possíveis.",
  "2021-12-09", 
  "10"
);
SELECT id, name, avaliacao from Films WHERE id = "004";

SELECT name from Films WHERE name LIKE "Hermanoteu%";

SELECT id, name, sinopse, avaliacao from Films  WHERE avaliacao >= "7";

-- EXERCÍCIO 07

SELECT name FROM Films WHERE name LIKE "%vida%";

SELECT * FROM Films
WHERE name LIKE "%flor%" OR
      sinopse LIKE "%professora%";
      
SELECT * FROM Films
WHERE date_lancamento < "2020-05-04";

SELECT * FROM Films
WHERE  date_lancamento < "2020-05-04" AND 
      (name LIKE "%flor%" OR
       sinopse LIKE "%farras%") AND  avaliacao > 7;
      
      








