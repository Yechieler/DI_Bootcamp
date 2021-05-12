CREATE TABLE orders (
	order_id serial,
	date timestamp,
	first_name varchar(100),
	last_name varchar (100),
	item_id integer,
	foreign key(item_id) references items(item_id)
);

CREATE TABLE items (
	item_id serial Primary Key,
	item_name varchar(100),
	price MONEY
);

INSERT INTO items(
	item_name,
	price
)
values('Chair',30),
('Truck', 20000),
('Bear',8000)

INSERT INTO orders(
	first_name,
	last_name,
	item_id
)
values('Jay','Bob',2),
('Lue','Moe',2),
('Eric','Noman',3)

SELECT order_id,Sum(1*price)
FROM orders o
INNER JOIN items i
ON o.item_id = i.item_id
GROUP BY o.order_id




bonus
///////////////


CREATE TABLE orders (
	order_id serial,
	date timestamp,
	user_id int,
	item_id integer,
	foreign key(item_id) references items(item_id),
	foreign key(user_id) references users(user_id)
);

CREATE TABLE items (
	item_id serial Primary Key,
	item_name varchar(100),
	price MONEY
);

CREATE TABLE users (
	user_id serial Primary Key,
	first_name varchar(100),
	last_name varchar(100)
);

INSERT INTO items(
	item_name,
	price
)
values('Chair',30),
('Truck', 20000),
('Bear',8000)

INSERT INTO users(
	first_name,
	last_name
)
values('Jay','Bob'),
('Lue','Moe'),
('Eric','Noman')

INSERT INTO orders(
	item_id
)
values(2),
(2),
(3)

SELECT order_id,Sum(1*price)
FROM orders o
INNER JOIN items i
ON o.item_id = i.item_id
GROUP BY o.order_id

SELECT users.user_id,Sum(1*price)
from users
inner join orders
on orders.user_id = users.user_id
INNER JOIN items
ON orders.item_id = items.item_id
group by users.user_id