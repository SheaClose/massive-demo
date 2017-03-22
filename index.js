const   express = require("express")
			, app = express()
			, cors = require("cors")
			, {json: jsonParser} = require("body-parser")
			, port = 4000
			, db = require('./db')

const cigarsController = require('./controllers/cigars_controller')

app.use(jsonParser())
app.use(cors())

app.get('/cigars', function(req, res){
	db.cigars.find((err, cigars)=>{
		return res.send(cigars)
	})
})
app.post("/cigars", function(req, res, next){
	db.createCigars([req.body.cigar_id, req.body.name, req.body.country, req.body.rating, req.body.price], function(err, cigars) {
		if (err) {
			return next(err)
		}
		return res.send(cigars)
	})
})
app.get('/cigars/:id', function(req, res){
	db.getCigars([Number(req.params.id)], function(err, cigars){
		return res.send(cigars)
	})
})
app.delete('/cigars/:id', (req,res)=>{
	db.removeCigar(Number(req.params.id), function (err, cigar){
		return res.status(200).json(cigar)
	})
})
app.put("/cigars", (req,res)=>{
	db.updateCigar([Number(req.body.id), req.body.name], function(err, cigar){
		return res.send(cigar);
	})
})


app.listen(port, ()=>console.log(`listening at port: ${port}`))
