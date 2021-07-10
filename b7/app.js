const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.get("/", (req, res) => {
    res.render("convert")
})
app.post("/", (req, res) => {
    let var1 = req.body.var1
    let convert1 = req.body.convert1
    let convert2 = req.body.convert2
    let convertNumber = var1 * Math.pow(10, convert1 - convert2)
    res.render("convert", {
        sendData: convertNumber
    })
})

app.listen(6299, (err) => {
    if (err) { console.log(err) } else {
        console.log("listen at 6299")
    }
})