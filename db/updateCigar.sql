update cigars
set name = $2
where cigar_id = $1
returning *;
