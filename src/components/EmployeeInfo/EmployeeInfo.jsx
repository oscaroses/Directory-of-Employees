import React from 'react';
import Employees from '../../seed/theEmployees.JSON';
import EmployeeTable from '../EmployeeTable';

function EmployeeInfo () {

  return (
    <EmployeeTable allEmployees={Employees} />
  )
}

export default EmployeeInfo;