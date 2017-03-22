delete from Cigars
where cigar_id = $1
RETURNING *;
