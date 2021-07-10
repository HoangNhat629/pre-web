const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let app = express();

app.engine("handlebars", handlebars({ defaultLayout: "defaultLayout" }));
app.set("view engine", `handlebars`);
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

let dbLink = `mongodb://localhost/final-database`;
mongoose.connect(dbLink, { useNewUrlParser: true }, err => {
    if (err) console.log("err database");
    else {
        console.log("Connected database");
    }
});


let port = 3000;
app.listen(port, err => {
    if (err) console.log("err app listen: ", err);
    console.log(`App listen at ${port}`);
});

const loginRouter = require("./routers/loginRouter");
const buyRouter = require("./routers/buyRouter")
app.use("/", loginRouter);
app.use("/login", buyRouter)
