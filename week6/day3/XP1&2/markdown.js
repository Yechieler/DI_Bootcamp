Exercise 1: DVD Rental
1.
-- select *
-- from language
2.
-- -- select name from language
--  SELECT
--      title,
--  	description,
--  	name 
--  FROM
--     film
--  INNER JOIN language
--     ON language.language_id = film.language_id;
	
	
-- select *
-- from film


3.
create table new_film(
	id serial primary key,
	name varchar(255) not null
	) 

insert into new_film (id,name)

values
(1,'Dude guy'),
(2,'Dude guy 2'),
(3,'Home on the run')

select * from new_film

4.

create table customer_review (
	review_id serial primary key not null,
	film_id integer not null,
	language_id int,
	title varchar(200),
	score int,
	review_text text,
	last_update timestamp,
	constraint fk_film_id
	foreign key (film_id) references new_film(id) on delete cascade,
	foreign key (language_id) references  language (language_id)
)

5.
INSERT INTO customer_review (
film_id,
language_id,
title,
score,
review_text,
last_update)

VALUES (
1,
1,
'Great film',
10,
'Best film ever.',
'05-11-2021'),
(2,1,'No, This is the greatest film',10,'Made me realise who i was','5-11-2021')


6.

DELETE FROM new_film 
Where id=2  -- review 2 was deleted


Exercise 2 : DVD Rental

1.
update film
set language_id = 2
where film_id in (1,2,3) 
returning language_id

SELECT * 
FROM film
ORDER BY film_id aSC

2.------------
--------------

3. DROP TABLE customer_review;

4.select 
count(1) 
from rental 
WHERE return_date IS NULL
