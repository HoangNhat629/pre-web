const express = require("express");
const handlebars = require("express-handlebars")
let app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: false }))
//cai dat hien thi

app.set("view engine", "handlebars")
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
//cai dat huong dan

 app.get("/", (req, res) => {
     res.render("mainPage");
 })
app.get("/login", (req, res) => {

    res.render("loginPage");

})



app.post("/login", (req, res) => {
    let data = fs.readFileSync('data.json')
    let username = req.body.username;
    let password = req.body.password;
    let objData = JSON.parse(data);// lấy dữ liệu
    console.log(data);
    if (username == objData.username && password == objData.password) { res.render("ask"); }
    else {
        res.render("loginPage", {
            loginStatus: "Đăng nhập thất bại"
        })
    }
    console.log(username)
    console.log(password)
})
// cai dat duong dan
app.get("/answer",(req,res)=>{
    let rawdata = fs.readFileSync("data1.json","utf8")
    let data = JSON.parse(rawdata)
    console.log(data)
    let randomNumber = Math.floor(Math.random()*data.length)
    let question = data[randomNumber]
    console.log(question)
    res.render("answer",{
        questionData : question.questionContent
    })
})
app.get("/ask",(req,res)=>{
    res.render("ask")
})
app.post("/ask", (req, res) => {
    let question = req.body.question;
    console.log("goi tin la", req.body)
    let data;

    // try {
    //     let rawdata = fs.readFileSync("data1.json", "utf8")
    //     console.log("Du lieu chua xu li", typeof (rawdata))
    //     let data = JSON.parse(rawdata)
    //     console.log("du lieu da duoc xu li", typeof (data))
    //     console.log(data)
    //     let newQuestion = {
    //         id: data.length,
    //         questionContent: question,
    //         questionAnswer: []
    //     }
    //     data.push(newQuestion)
    //     console.log("data sau khi duoc push la", data)
    //     let saveData = JSON.stringify(data)
    //     fs.writeFile('data1.json', saveData, (err) => {
    //         if (err) { console.log(err) } else {
    //             console.log("Saved")
    //             res.render("ask")
    //         }
    //     })
    // } catch (err) {
    //     let data = []
    //     let newQuestion = {
    //         id: 0,
    //         questionContent: question,
    //         questionAnswer: []
    //     }
    //     data.push(newQuestion)
    //     console.log()
    //     let saveData = JSON.stringify(data)// lưu dữ liệu
    //     fs.writeFile('data1.json', saveData, (err) => {
    //         if (err) { console.log(err) } else {
    //             console.log("Saved")
    //             res.render('ask')
    //         }
    //     })
    // }
    try {
        let rawdata = fs.readFileSync("data1.json", "utf8")
        data = JSON.parse(rawdata)
    } catch (err) {
        data = []
    } finally {
        let newQuestion = {
            id: data.length,
            questionContent: question,
            questionAnswer: []
        }
        data.push(newQuestion)
        let savedData = JSON.stringify(data)
        fs.writeFile("data1.json", savedData, (err) => {
            if (err) { console.log(err) } else {
                console.log("Saved")
                res.render('ask')
            }
        })
    }
})

app.use(express.static("public"));


//khoi tao server

app.listen(5000, (err) => {
    if (err) { console.log(err) } else {
        console.log("App listen at 5000")
    }
})
