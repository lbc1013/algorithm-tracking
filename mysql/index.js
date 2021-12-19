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

exports.getFunc = () => {
  let sql = 'SELECT * FROM algorithm';
  return new Promise ((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject (err);
      } else {
        resolve(result);
      }
    })
  })
}

exports.deleteFunc = (userInputAlgo) => {
  let sql = 'DELETE FROM algorithm WHERE name = ?';
  return new Promise ((resolve, reject) => {
    connection.query(sql, [userInputAlgo], (err, result) => {
      if (err) {
        reject (err);
      } else {
        resolve(result);
      }
    })
  })
}

exports.updateFunc = (userInputAlgo, userInputLan) => {
  let sql = 'UPDATE algorithm SET language = ? WHERE name = ?';
  return new Promise ((resolve, reject) => {
    connection.query(sql, [userInputLan, userInputAlgo], (err, result) => {
      if (err) {
        reject (err);
      } else {
        resolve(result);
      }
    })
  })
}