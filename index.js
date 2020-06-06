var express = require('express')
var app = express()

var cors = require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/users', Users)

app.get('/', (req, res) => {
   res.send('hello from server!')
})

app.get('/api/helloworld', (req, res) => {
  res.json({sayHi: 'hello from server, nice to meet you!'})
})
 
app.listen(5000, () => {
   console.log('App listening on port 5000')
})


//Connect db and create table
var mysql = require('mysql');
var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "12345678",
   database: "computer_review"
 });

 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
 });