const express = require('express')
const app = express() //magic unlocked
const bodyParser = require('body-parser')

//THIS IS MIDDLEWARE
app.use(express.static('assets'))
app.use(bodyParser.urlencoded( { extended: true }  ))
app.use(bodyParser.json())

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/ping', function(request, response){
    response.send('pong')
})

app.get('/genie', function(request, response){
    response.render('index')
})

app.post('/genie', function(request, response){
    const data = request.body
    const genies = [
        'hajar',
        'that aladin genie',
        'casper',
        'dirk kuijt',
        'timothy'
    ]
    const genie = genies[data.genieNumber]
    response.send(genie)
})

app.listen(3000, function(){
    console.log('server has started')
})