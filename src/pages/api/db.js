const mysql = require('mysql');
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

connection.query(
  'SELECT * FROM user',
  (error, results) => {
    console.log(results);
  }
);

// export default function handler(req, res) {
//   connection.query(
//     'SELECT * FROM user',
//     (error, results) => {
//       console.log(results);
//     }
//   );
//   res.status(200).json({ name: 'John Doe' })
// }
