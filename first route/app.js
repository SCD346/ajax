const express = require('express')
const app = express() //magic unlocked

app.get('/ping', function(request, response){
    response.send('pong')
})

app.listen(3000, function(){
    console.log('server has started')
})