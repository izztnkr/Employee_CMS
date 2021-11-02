var mysql = require("mysql2");

var con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Summers1992!",
    database: "employees_db",
    //connect to db departments, & to db employees
  },
  console.log("Connected to the employees_db.")
);
con.connect(function (err) {
  if (err) {
    console.error('Database connection error', err);
    throw err;
  }
  /* con.query("SELECT * FROM roles", function (err, result) {
    if (err) {
      console.err('Connection', err)
      throw err;
    }
    console.log(result);
  }); */
});


module.exports = con;