const express = require('express');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const app = express();
const db = require('../mysql/index.js');

const PORT = 3000 || process.env.PORT;


app.use (express.static('client/dist'));
app.use (bodyParser.json({}));

app.post ('/algorithm', (req, res) => {
  let userInputData = req.body;
  let userInputAlgo = req.body.algorithm;
  let userInputLan = req.body.language;

  db.addFunc(userInputAlgo, userInputLan)
    .then ((result) => {
      res.sendStatus(201);
      console.log(result, 'The data has been successfully posted');
    })
    .catch ((err) => {
      res.sendStatus(500);
      console.log('There is an error posting the data in db', err);
    })
})

app.get ('/algorithm', (req, res) => {
  db.getFunc ()
    .then ((result) => {
      res.send(result);
      console.log(result, 'The data has been successfully sent to the client');
    })
    .catch ((err) => {
      res.sendStatus(500);
      console.log('There is an error getting the data in db', err);
    })
})

app.listen (PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})