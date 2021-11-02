const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllEmployees() {
    return this.connection.query(
      "SELECT * from employees",
      function (err, result) {
        if (err) {
          console.error("An error occurred", err);
          throw err;
        }
        console.log(result);
      }
    );
  }
  findAllRoles() {
    return this.connection.query("SELECT * from roles", function (err, result) {
      if (err) {
        console.error("An error occurred", err);
        throw err;
      }
      console.log(result);
    });
  }
  findAllDepartments() {
    return this.connection.query(
      "SELECT * from departments",
      function (err, result) {
        if (err) {
          console.error("An error occurred", err);
          throw err;
        }
        console.log(result);
      }
    );
  }
  // addDepartment() {
  //   return this.connection.query(
  //     "SELECT * from departments",
  //     function (err, result) {
  //       if (err) {
  //         console.error("An error occurred", err);
  //         throw err;
  //       }
  //       console.log(result);
  //     }
  //   );
  // }
}
module.exports = new DB(connection);
