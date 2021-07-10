const QuestionModel = require("../models/dataSchema");

let createData = function (cauhoi) {
  let newQuestion = QuestionModel({
    questionContent: cauhoi,
    questionAnswers: []
  });
  newQuestion.save().then(
    value => {
      console.log(value);
    },
    fail => {
      console.log(fail);
    }
  );
};

// callback
let readData = function (callback) {
  QuestionModel.find({}, (err, data) => {
    if (err) {
      console.log("ERR: " + err);
      callback({
        questionContent: "Loi k tim thay cau hoi"
      });
    } else {
      console.log("DATA:", data);
      callback(null, data);
    }
  });


};

async function asyncReadData() {
  let data = await QuestionModel.find({});
  return data;
}

async function updateByID(id, answer) {
  let data = await QuestionModel.findById({ _id: id }); // findByID
  console.log("recv data from update: ", data);
  data.questionAnswers.push(answer);
  await QuestionModel.updateOne({ _id: id }, data)
    .then(data => {
      console.log("update: ", data);
    })
    .catch(err => {
      console.log("update err: ", err);
    });
}

async function deleteQuestion(id) {
  QuestionModel.findOneAndDelete({ _id: id }, (err, data) => {
    if (err) {
      console.log("delete error", err);
    } else {
      console.log("delete success", data);
    }
  });
}

module.exports = {
  sampleCreate: createData, //
  sampleRead: readData, //
  asyncReadData: asyncReadData, //
  updateByID: updateByID, //,
  deleteQuestion: deleteQuestion
};
