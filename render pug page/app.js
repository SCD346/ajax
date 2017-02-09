const express = require('express')
const app = express() //magic unlocked

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/ping', function(request, response){
    response.send('pong')
})

app.get('/genie', function(request, response){
    response.render('index')
})

app.listen(3000, function(){
    console.log('server has started')
})