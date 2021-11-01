//require inquirer
const inquirer = require("inquirer");
//connect mysql
var mysql = require("mysql2");

var con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Summers1992!",
    database: "roles",
    //connect to db departments, & to db employees
  },
  console.log("Connected to the roles database.")
);
// con.connect(function (err) {
//   if (err) throw err;
//   con.query("SELECT * FROM roles", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
//initialize prompt, ask what they want to do
inquirer
  .prompt([
    {
      name: "start",
      message: "What's would you like to do?",
      type: "list",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add and employee",
        "Update an employee role",
      ],
    },
  ])
  .then(function (answer) {
    console.log(answer.start);

    //switch or conditional statement of what they want to do from all of the options with then options
    switch (answer.start) {
      case "View all departments":
        /* implement the statement(s) to be executed when
      expression = value1 */
        console.log("chose to view all depts.");
        // query to view formatted table showing department names and department ids
        //SELECT * FROM departments
        db.query(`SELECT * FROM departments`, (err, rows) => {
          console.log(rows);
        });
        break;
      case "View all roles":
        /* implement the statement(s) to be executed when
      expression = value2 */
        console.log("chose to view all roles");
        // query to view formatted table showing job title, role id, the deparment that role belongs in and the salary for the role
        //SELECT * FROM roles
        db.query(`SELECT * FROM roles`, (err, rows) => {
          console.log(rows);
        });
        break;
      case "View all employees":
        /* implement the statement(s) to be executed when
          expression = value3 */
        console.log("chose to view all employees");
        // query to view formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers to that employee
        //SELECT * FROM employees
        db.query(`SELECT * FROM employees`, (err, rows) => {
          console.log(rows);
        });
        break;
      case "Add a department":
        /* implement the statement(s) to be executed when
            expression = value3 */
        console.log("chose to add a department");
        // query to view formatted table showing department names
        //prompted to enter department name
        //which is then added to database and shown by query to view formatted table showing department names
        break;
      case "Add a role":
        /* implement the statement(s) to be executed when
              expression = value3 */
        console.log("chose to add a role");
        // prompted to enter the name of the role, salary, and department for the role
        //which is then added to database and shown by query to view formatted table showing roles
        break;
      case "Add and employee":
        /* implement the statement(s) to be executed when
          expression = value3 */
        console.log("chose to and an employee");
        //prompted to enter the employee's first name, last name, role, and manager
        //which is then added to database and shown by query to view formatted table showing employees
        break;
      case "Update an employee role":
        /* implement the statement(s) to be executed when
          expression = value3 */
        console.log("chose to update an employee role");
        //query to view formatted table showing employees
        //prompted to select an employee to update, takes input
        //which is then added to database and shown by query to view formatted table showing employees
        break;
      default:
        /* implement the statement(s) to be executed if expression 
     doesn't match any of the above cases */
        console.log("invalid answer");
      //return to start of inquirer prompt.
    }
  });
//view employees query with console log return
//view roles query console log return
//view departments query console log return

//add employee: get roles from employe db to show to user in list via inquirer so that user can select it.

//use mapping to return an opbject (inquirer can use a variable to hold an array, map returns the new array)
//names is what user sees, the value returns from the prompt the id
// let roles = queryData.map((roles) => {
//   return {};
// });
//

//triggers promt asking user with new employee details such as those items in schema with console log return
//add role query with console log return
//add department

//update employees
//show list of employee with ids,
//ask for employee ID, query by ID for that employee, then prompt role options with mapping,
//then use the update query to update the role with ID to change the role.

//create class constructors later, maybe; meaning split files for different functions for scaling etc.
