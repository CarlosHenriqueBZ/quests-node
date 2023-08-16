const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.set('view engine', 'ejs');
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/ask", (req, res) => {
    res.render("ask")
})

app.post("/save", (req, res) => {
   var title = req.body.title
   var desc = req.body.desc

    res.send("Titulo" + title + " " + "Desc" + " " + desc)
})

app.listen(1206), () => {
    console.log("App Rodando")
}