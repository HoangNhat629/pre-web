const express = require("express")
const path = require("path");
const handlebars= require("express-handlebars")
let app = express();
let option ={
    defaultLayout:"main"
}
let render = handlebars(option);
app.engine("handlebars",render);
app.set("view engine","handlebars")
//app.set("view engine","ejs"/"reactjs")

// app.engine("handlebars",handlebars({defaultLayout:"main"}));
// app.set("view engine","handlebars");

app.get("/", (req, res) => {
    res.send("Trang chu");
})

app.use(express.static("public"));

app.get("/info", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/dangnhap.html"))
})
app.get("/info1", (req, res) => {
    res.render("trang1");
})
app.get("/info2", (req, res) => {
    res.render("trang2");
})

app.listen(5000, (err) => {
    if (err) { console.log(err) }
    else { console.log("App listen at 5000") }
})