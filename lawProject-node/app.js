const express = require("express");
const bodyParser = require('body-parser')
const cookieSession = require("cookie-session")
const passport = require('passport')
const path = require('path')
require('dotenv').config()

const mysql = require('mysql2')

//connect to mysql database
var connection = mysql.createConnection({
    host: process.env.AWSDB_HOST,
    user: process.env.AWSDB_USER,
    password: process.env.AWSDB_PASSWORD,
    database: process.env.AWSDB_NAME
  });

// var connection = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     database: process.env.DATABASE_NAME,
//     password: process.env.DATABASE_PASSWORD
//   });

  connection.query(`SELECT * FROM questionAnswers`,function(err,results, fields){
    if(err) console.log(err)
    else console.log(results)
  })

// creating the express instance
const app = express()
const { PORT = 8080 } = process.env 
console.log(PORT)

// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieSession({
    name: "mysession",
    keys:['vueauthrandomkey'],
    secure: true,
    sameSite: "none",
    maxAge: 24*60*60*1000 //24 hours
}))


app.use(passport.initialize());
app.use(passport.session());

//settup the middleware function for checking if logged in
const authMiddleware = (req,res,next) => {
    if(!req.isAuthenticated()) res.status(401).send("you are not authenticated")
    else return next()
}

//temp table for users replace with a call to the database
let users= [
    {
        id:123456789,
        name: "רועי",
        email: "roy152@gmail.com",
        password: "asdasd123"
    },
    {
        id:322959800,
        name: "בובי בוטן",
        email: "a",
        password: "a"
    }
]

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },
    
        (username, password, done) => {
            let user = users.find(user => user.email == username && user.password == password)
            if(user) done(null, user)
            else done(null, false, { message: "Incorrect username or password"})
        }
    )
)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
  let user = users.find((user) => {
  return user.id === id
  })
  
  done(null, user)
})

function setResponseHeaders(res){
    let requestOrigin = res.req.headers.origin
    let isAllowed = ["http://localhost:4000","http://lawproject.ben-israel.com"].some(allowedOrigin => requestOrigin == allowedOrigin)
    res.header("Access-Control-Allow-Origin", `${isAllowed? requestOrigin: ''}`);
    res.header("Access-Control-Allow-Credentials", "true")
    res.header('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
}

app.get('/', function(req,res){
    setResponseHeaders(res)
    res.sendFile('index.html', {root: __dirname});
})

app.get('/people/:id', function(req,res){
    setResponseHeaders(res)
    res.send( JSON.stringify({'name': 'john', 'id':'42'}))
})

app.get('/answers', function(req,res){
    setResponseHeaders(res)
    connection.query(`SELECT * FROM questionAnswers WHERE userId=${req.session.passport.user}`,function(err,results, fields){
        if(err) console.log(err)
        else res.send(results)
      })
})

app.get('/questions', function(req,res){
    setResponseHeaders(res)
    res.sendFile('./jsons/questions.json', {root: __dirname})
})

app.post('/answers/:id',function(req,res){
    setResponseHeaders(res)

    let answer = req.body.answer
    let questionId = req.params.id
    connection.query(`INSERT INTO questionAnswers (userId, questionId, answer) VALUES (${req.session.passport.user},"${questionId}","${answer}" ) ON DUPLICATE KEY UPDATE answer="${answer}"`
        ,function(err,results, fields){
        if(err) console.log(err)
        else console.log(results)
      })
})

app.options('/*', (_, res) => {
    setResponseHeaders(res)
    res.sendStatus(200);
});


app.post('/login', (req,res,next) => {
    setResponseHeaders(res)

    passport.authenticate("local",(err,user,info) => {
        if(err) return next(err)
        
        if(!user) res.status(400).send([user, "cannot login", info])
        req.login(user, err => {
                if(err) res.send(err,500,"error")
                res.send("Logged in")
            })
    })(req, res, next);
})

app.get("/logout", (req,res)=>{
    setResponseHeaders(res)

    req.logout();
    console.log("logged out")
    return res.send();
})

app.get("/user", authMiddleware, (req,res) => {
    setResponseHeaders(res)

    let user = users.find( user => user.id == req.session.passport.user)
    console.log([user,req.session])
    res.send({user})
})

app.get("/loggedIn", (req,res)=>{
    setResponseHeaders(res)

    res.send(!!req.user)
})

app.listen(PORT, ()=>{console.log(`listening on port ${PORT} `)})