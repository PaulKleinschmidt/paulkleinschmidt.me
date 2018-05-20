var express = require('express')
var app = express()
var path = require('path');

app.use(express.static('public'))

app.set('view engine', 'pug')

// routes 
app.get(['/', '/me'], (request, response) => {
    response.render('hello')
})

app.get(['/contact'], (request, response) => {
    response.render('contact')
})

app.listen(3000, () => {
    console.log('listening on 3000')
})