import { Suspense } from "react";
import "./App.css";
import Count from "./Count";
import ToggleText from "./ToggleText";
import Employees from "./Employees";

function App() {
  const fetchEmployees = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.json();
    } catch (error) {
      // throw Error("Error occured");
      console.log(error);
    }
  };
  const employeeResponse = fetchEmployees();
  return (
    <>
      <h3>Practice Task</h3>
      <h5>Counter App</h5>
      <Count></Count>

      <ToggleText></ToggleText>

      <Suspense fallback={<p>Employee Data Loading . . .</p>}>
        <Employees employeeResponse={employeeResponse}></Employees>
      </Suspense>
    </>
  );
}

export default App;
