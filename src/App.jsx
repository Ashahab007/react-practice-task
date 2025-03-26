import { Suspense } from "react";
import "./App.css";
import Count from "./Count";
import ToggleText from "./ToggleText";
import Employees from "./Employees";
import { ErrorBoundary } from "react-error-boundary";

// ! To catch error
/***
 * 1. In terminal run npm i react-error-boundary.
 * 2. then use  <ErrorBoundary> component over the selected section.
 * 3. Now import { ErrorBoundary } from "react-error-boundary".
 * 4. Sometimes it needs to restart the server to work it perfectly.
 * */

function App() {
  const fetchEmployees = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  };
  const employeeResponse = fetchEmployees();
  return (
    <>
      <h3>Practice Task</h3>
      <h5>Counter App</h5>
      <Count></Count>

      <ToggleText></ToggleText>
      <ErrorBoundary fallback={<p>Something went wrong.....</p>}>
        <Suspense fallback={<p>Employee Data Loading . . .</p>}>
          <Employees employeeResponse={employeeResponse}></Employees>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
