INSERT INTO Cigars (cigar_id, name, country, rating, price)
values ($1, $2, $3, $4, $5)
RETURNING *;
