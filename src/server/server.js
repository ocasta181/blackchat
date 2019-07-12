var app = require('express')()

var http = require('http').createServer(app)
var path = require('path')

app.get('/', function(req, res){
    res.sendFile(path.resolve('./public/index.html'))
})


http.listen(3000, function(){
    console.log('listening on *:3000')
})