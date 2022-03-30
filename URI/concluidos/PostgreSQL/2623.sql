SELECT products.name, categories.name FROM products, categories WHERE 
products.id_categories IN (1,2,3,6,9)
AND products.amount > 100
AND products.id_categories = categories.id 
ORDER BY products.id_categories;