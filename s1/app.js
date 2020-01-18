let express = require('express')
let path = require('path')

let app = new express()

app.use(express.static(path.join(__dirname,'public')))

app.listen(3000)