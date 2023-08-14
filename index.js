const express = require('express')
const app = express()


app.set('view engine', 'ejs');

app.get("/:nome/:leng", (req, res) => {
    var exibirMsg = true
    res.render("index", {
        nome: req.params.nome,
        leng: req.params.leng,
        empresa: "Flamboyant",
        saldo: 100000000,
        msg: exibirMsg
    })
})

app.listen(1206), () => {
    console.log("App Rodando")
}