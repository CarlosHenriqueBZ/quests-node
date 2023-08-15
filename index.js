const express = require('express')
const app = express()


app.set('view engine', 'ejs');
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.listen(1206), () => {
    console.log("App Rodando")
}