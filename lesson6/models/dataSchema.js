const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stucture = {
    questionContent: { type: String },
    questionAnswer: []
};
const options = {
    _id: true,
    timestamps: true
};
const questionSchema = new Schema(stucture, options)
let QuestionModel = mongoose.model("question", questionSchema);
module.exports = QuestionModel;  