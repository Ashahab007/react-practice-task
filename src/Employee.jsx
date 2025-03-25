const Employee = ({ employee }) => {
  return (
    <li className="employee">
      <p>
        <span>User Name: </span>
        {employee.username}
      </p>
      <p>
        <span>Company Name:</span> {employee.company.name}
      </p>
      <p>
        <span>City:</span> {employee.address.city}
      </p>
    </li>
  );
};

export default Employee;
