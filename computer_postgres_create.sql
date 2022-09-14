CREATE TABLE parts
(
  "_id" SERIAL NOT NULL,
  "part" VARCHAR(100) NOT NULL,
  "price" INT,
  PRIMARY KEY ("_id")
);

INSERT INTO parts(part, price)
VALUES('Motherboard', 150), 
      ('Power Supply Unit', 100),
      ('Fans', 30),
      ('Radiator', 110),
      ('CPU', 400),
      ('Graphics Card', 1000),
      ('SSD', 250),
      ('RAM', 150);