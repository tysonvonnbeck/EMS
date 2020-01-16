var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "CMS_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  askQuestions();
});

function askQuestions() {
  inquirer
    .prompt({
      name: "addViewUp",
      type: "list",
      message:
        "Would you like to [ADD], VIEW, or UPDATE an employee, role or department?",
      choices: ["[ADD]", "VIEW", "UPDATE"]
    })
    .then(function (answer) {
      if (answer.addViewUp === "[ADD]") {
        add();
      } else if (answer.addViewUp === "VIEW") {
        view();
      } else if (answer.addViewUp === "UPDATE") {
        update();
      } else {
       // connection.end();
      }
    });
}

function add() {
  console.log("ADD");
  

  inquirer
    .prompt({
      name: "add",
      type: "list",
      message: "Would you like to [ADD] an employee, a role or a department?",
      choices: ["[ADD] an employee", "[ADD] a role", "[ADD] a department"]
    })
    .then(function (answer) {

     
      
        if (answer.add === "ADD a department") {
          console.log(answer.add)

      //   inquirer
      //     .prompt([
      //       {

      //         name: "department",
      //         type: "input",

      //         message: "Department name:"
      //       }
      //     ])
      //     .then(function (answer) {
      //       connection.query(
      //         "INSERT INTO department SET ?",
      //         {
      //           name: answer.department
      //         },

      //         function (err) {
                
      //           if (err) throw err;
      //           askQuestions();
      //         }
      //       );
      //     });
      }
    });

}

function view() {
  console.log("view");
  
  inquirer
    .prompt({
      name: "view",
      type: "list",
      message: "Please chose an option?",
      choices: ["department", "employee", "role"]
    }).then(function (answer) {

      connection.query(`SELECT * FROM  ${answer.view}`, function (err, res) {
        if (err) throw err;
        console.table(res);
        askQuestions()
      });

    })
}
function update() {
  console.log("update");
  
  // inquirer
  //   .prompt([
  //     {
  //       name: "empId",
  //       type: "input",
  //       message: "Enter employee's ID"
  //     }, {
  //       name: "newRoleId",
  //       type: "input",
  //       message: "Enter new role's ID"
  //     }

  //   ]).then(function (answer) {

  //     connection.query(
  //       "UPDATE employee SET ? WHERE ?",
  //       [
  //         {
  //           role_id: answer.newRoleId
  //         },
  //         {
  //           id: answer.empId
  //         }
  //       ],
  //       function (err, res) {
  //         if (err) throw err;


  //         askQuestions();
  //       }
  //     );
  //   })

  }


// else if (answer.adding === "ADD an employee") {
//   connection.query(`SELECT * FROM role`, function(err, results) {
//     if (err) throw err;

//   let roles=results.map(function(results){
//     return {name: results.title,
//      value:results.id}
//    })


//   connection.query(`SELECT * FROM employee`, function(err, results) {
//   if (err) throw err

//   let employees=results.map(function(results){
//    return ({name: `${results.first_name} ${results.last_name}`,
//     value:results.id})
//   })
//   employees.unshift({
//     name: "None",
//     value: ""
//   })

//   inquirer
//     .prompt([
//       {
//         name: "name",
//         type: "input",
//         message: "Employee's first name:"
//       },
//       {
//         name: "last",
//         type: "input",
//         message: "Employee's last name:"
//       },
//       {
//         name: "id",
//         type: "rawlist",
//         choices: roles,
//         message: "Employee's department:"
//       },
//       {
//         name: "mid",
//         type: "rawlist",
//         choices: employees,
//         message: "Employee's Manager:"
//       }

//     ]).then(function (answer) {
//       if(answer.mid===""){
//         connection.query(
//           "INSERT INTO employee SET ?",
//           {
//             first_name: answer.name,
//             last_name: answer.last,
//             role_id: answer.id
//           },

//           function (err) {
//             if (err) throw err;
//             askQuestions();
//           }
//         );
//       }else{
//       connection.query(
//         "INSERT INTO employee SET ?",
//         {
//           first_name: answer.name,
//           last_name: answer.last,
//           role_id: answer.id,
//           manager_id: answer.mid
//         },

//         function (err) {
//           if (err) throw err;
//           askQuestions();
//         }
//       );
//     }
//     })
//   })
//   })
//  } else {
//       connection.query(`SELECT * FROM department`, function(err, results) {
//         if (err) throw err;
//         console.log(results);

//   inquirer.prompt([

//       {
//         name: "title",
//         type: "input",
//         message: "New role's title:"
//       },
//       {
//         name: "salary",
//         type: "input",
//         message: "New role's salary:"
//       },
//       {
//         name: "depId",
//         type: "rawlist",
//         choices: function() {
//           var choiceArray = [];
//           for (var i = 0; i < results.length; i++) {
//             choiceArray.push({name :results[i].name,
//               value: results[i].id
//             });
//           }
//           return choiceArray;
//         },
//         message: "New role's department"
//       }

//     ]).then(function (answer) {

//       connection.query(
//         "INSERT INTO role SET ?",
//         {
//           title: answer.title,
//           salary: answer.salary,
//           department_id: answer.depId
//         },

//         function (err) {
//           if (err) throw err;
//           askQuestions();
//         }
//       );
//     })
//   });

// }

