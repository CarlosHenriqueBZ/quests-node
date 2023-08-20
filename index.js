const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const connection = require("./database/database")
const questionsDB = require("./database/Question")

//database

connection.authenticate().then(() => {
    console.log("Conectado")
}).catch((msgErro) => {
    console.log(msgErro)
})


app.set('view engine', 'ejs');
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    questionsDB.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    }).then( questions => {
        res.render("index", {
            questions
        })
    })
})

app.get("/ask", (req, res) => {
    res.render("ask")
})

app.post("/save", (req, res) => {
   var title = req.body.title
   var desc = req.body.desc
   questionsDB.create({
    title: title,
    description: desc,
   }).then(() => {
    res.redirect('/');
   })
})

app.listen(1206), () => {
    console.log("App Rodando")
}