const express = require("express");
const Router = express.Router();
const fs = require("fs");
const {
  sampleRead,
  asyncReadData,
  updateByID,
  deleteQuestion
} = require("../controllers/dataController");



Router.get("/cauhoingaunhien", async (req, res) => {
  let data = await asyncReadData();
  let randomData = data[Math.floor(Math.random() * data.length)];
  res.render("mainPage", {
    questionData: randomData.questionContent,
    id: randomData._id
  });
});

Router.post("/yes", async (req, res) => {
  console.log("req body: ", req.body)
  await updateByID(req.body.id, "yes");
  res.redirect("/cauhoingaunhien");
});

Router.post("/no", async (req, res) => {
  await updateByID(req.body.id, "no");
  res.redirect("/cauhoingaunhien");
});

Router.post("/delete", async (req, res) => {
  await deleteQuestion(req.body.id)
  res.redirect("/cauhoingaunhien")
})


module.exports = Router;
