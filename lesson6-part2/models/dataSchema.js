const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const structure = {
  questionContent: { type: String },
  questionAnswers: []
};

const options = {
  _id: true,
  timestamps: true
};
const questionSchema = new Schema(structure, options);

let QuestionModel = mongoose.model("questions", questionSchema);

module.exports = QuestionModel;
