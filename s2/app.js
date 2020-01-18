let express = require('express')
let path = require('path')

let app = new express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/test', function(req, res) {
	res.send(`${req.query.callback}({name:'${req.query.name}',age:'${req.query.age}'})`)
	console.log(req.query)
})

app.listen(3001, function() {
	console.log('Serve on 3001')
})
