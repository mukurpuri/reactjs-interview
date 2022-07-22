import React from 'react';
import { useState } from "react";
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


import CreateProfile from './component/Employee/action/create';
import EmployeeList from './component/Employee/list';

import { defaultEmployeeList} from './utilities';

import {EmployeesListContext} from './contexts';
import Employee from './component/Employee';
import EditProfile from './component/Employee/action/edit';

function App() {
   
  let [employees, setEmployees] = useState(defaultEmployeeList);

  const pushNewEmployeeData = data => {
    let employeeList = employees.concat();
    employeeList.push(data);
    setEmployees(employeeList);
  }

  const updateList = data => {
    setEmployees(data);
  }
  return (
    <EmployeesListContext.Provider value={{employees, pushNewEmployeeData, updateList}}>
      <div className="container">
          <div className="col-md-12">
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<EmployeeList />}></Route>
            <Route path="/create" element={<CreateProfile />}></Route>
            <Route path="/profile/:id" element={<Employee />}></Route>
            <Route path="/edit/:id" element={<EditProfile />}></Route>
            </Routes>
        </BrowserRouter>
        </div>
      </div>
      </EmployeesListContext.Provider>
  );
}

export default App;
