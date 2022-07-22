import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { EmployeesListContext } from '../../contexts';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
    const navigate = useNavigate();
    const { employees } = useContext(EmployeesListContext);

    let rows = [];
    employees.forEach(user => {
        if(user.show) {
            rows.push(
                <tr key={user.id}>
                    <td><img src={user.photo} className="emp-photo" alt={`Photo of ${user.firstName}`} /></td>
                    <td><Link to={`/profile/${user.id}`}>{user.firstName}</Link></td>
                    <td>{user.lastName}</td>
                    <td>{user.dob}</td>
                    <td>{user.designation}</td>
                    <td>{user.experience}</td>
                    
                </tr>
            )
        }
    });

    const addEmployee = () => {   
        navigate('/create');
    }
    

    return (
        <>
            
            <table className="table employees-list">
                <thead>
                    <tr>
                    <th scope="col"></th>    
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                </table>
                <p>
                <button onClick={addEmployee} type="button" className="btn btn-primary full mt-3"><strong>Create Employee</strong></button>
            </p>
        </>
    )
}

export default EmployeeList;