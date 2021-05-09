Exercise 1 : Items And Customers

-- select * from items 
-- where(price>80)
-- where(price>=300)
select * from customers 
-- where customer_name like ('%Smith') --calling all customers like this name
--there is no name.
-- where customer_name like ('%Jones')
--only all with this name will show up 
where customer_name not like ('%Scott')