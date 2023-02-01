const express = require("express");

const app = express()
const port = 3000

app.get('/', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile('index.html', {root: __dirname});
})

app.get('/people/:id', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.end( JSON.stringify({'name': 'john', 'id':'42'}))
})

app.get('/answers/:id', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.end( JSON.stringify({'name': 'bobo', 'id':'42'}))
})

app.get('/questions', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile('./jsons/questions.json', {root: __dirname})
})

app.listen(port, ()=>{console.log(`listening on port ${port} `)})