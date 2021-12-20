const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect ('mongodb://localhost/algorithmTracker', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('It is connected to the db');
  }
});

//schema create
const algorithmSchema = new Schema ({
  name : {
    type: String,
    unique: true
  },
  language : {
    type: String
  }
})

//model cretae
const Algorithm = mongoose.model('Algorithm', algorithmSchema);

exports.addFunc = (algorithm, language) => {
  return new Promise ((resolve, reject) => {
    Algorithm.create ({name : algorithm, language : language}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

exports.getFunc = () => {
  return new Promise ((resolve, reject) => {
    Algorithm.find ({}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

exports.deleteFunc = (algorithm) => {
  return new Promise ((resolve, reject) => {
    Algorithm.deleteOne ({name : algorithm}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

exports.updateFunc = (algorithm, language) => {
  return new Promise ((resolve, reject) => {
    Algorithm.findOneAndUpdate ({name : algorithm}, {language: language}, {upsert: true}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}