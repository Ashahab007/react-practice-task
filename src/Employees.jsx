// !Create a user list application that fetch and display data from the JSONPlaceholder API. Display user name, company name and city in a list. Show loading status while fetching data, show an error message if the API request fails.

import React, { use } from "react";
import Employee from "./Employee";

const Employees = ({ employeeResponse }) => {
  const employees = use(employeeResponse);
  console.log(employees);

  //   const [username] = employees;
  console.log("Username: ", employees[0].username);
  console.log("Company Name: ", employees[0].company.name);
  console.log("City: ", employees[0].address.city);

  return (
    <div
      style={{
        border: "2px solid green",
        marginTop: "10px",
        paddingRight: "50px",
        borderRadius: "10px",
      }}
    >
      <h5>Total Employees: {employees.length}</h5>
      <ol>
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee}></Employee>
        ))}
      </ol>
    </div>
  );
};

export default Employees;
