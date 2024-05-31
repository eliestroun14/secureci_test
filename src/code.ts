import * as mysql from 'mysql';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test'
});

connection.connect();

function unsafeQuery(userId: string) {
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  });
}