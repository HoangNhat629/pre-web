const express = require("express");
const Router = express.Router();
const fs = require("fs");
const { sampleCreate } = require("../controllers/dataController");

Router.get("/ask", (req, res) => {
  res.render("askPage");
});

Router.post("/ask", (req, res) => {
  console.log(req.body);
  res.render("mainPage", {
    questionContent: "create cau hoi thanh cong "
  });
});

module.exports = Router;
