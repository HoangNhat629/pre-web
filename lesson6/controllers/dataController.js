const QuestionModel = require("../models/dataSchema");
let createData = function (cauhoi) {
    let newQuestion = QuestionModel({
        questionContent: cauhoi,
        questionAnswer: []
    });

    newQuestion.save.then(
        value => {
            console.log(value);
        },
        fail => {
            console.log(fail);
        }
    );
};
