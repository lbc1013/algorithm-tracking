var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'algorithmTracker'
});

connection.connect((err, result) => {
  if (err) {
    throw err;
  } else {
    console.log(result, 'Connected to the db')
  }
});

exports.addFunc = (userInputAlgo, userInputLan) => {
  let sql = 'INSERT INTO algorithm (name, language) VALUES (?, ?)';
  return new Promise ((resolve, reject) => {
    connection.query(sql, [userInputAlgo, userInputLan], (err, result) => {
      if (err) {
        reject (err);
      } else {
        resolve (result);
      }
    });
  })
}
