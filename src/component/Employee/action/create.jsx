import React, { useState, useContext } from "react";
import { defaultNewUserData } from "../../../utilities";
import { nanoid } from 'nanoid'

import { useNavigate } from 'react-router-dom';


import { EmployeesListContext } from '../../../contexts';

const CreateProfile = () => {
    const navigate = useNavigate();
    const { setData } = useContext(EmployeesListContext);
    let [userData, setUserData] = useState(defaultNewUserData);

    const setFormData = e => {
        const value = e.currentTarget.value;
        const key = e.currentTarget.id;

        let data = Object.assign({}, userData);

        data[key] = value;
        setUserData(data);
    }

    const saveEmployeeData = () => {
        userData["id"]= nanoid();
        userData["show"]= true;
        setData(userData);
        setUserData(defaultNewUserData);
        navigate('/');
    }

    return (
        <>
        <div className="card">
            <div className="header">
                Add new Employee
            </div>
            <div className="body">
            <div className="container addEmployee">
                <div className="row">
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" onChange={setFormData} className="form-control" id="firstName"/>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" onChange={setFormData} className="form-control" id="lastName"/>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth (dd/mm/yyyy)</label>
                        <input type="text" onChange={setFormData} className="form-control" id="dob"/>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="designation">Designation</label>
                        <input type="text" onChange={setFormData} className="form-control" id="designation"/>
                    </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="experience">Experience</label>
                            <input type="number" onChange={setFormData} className="form-control" id="experience"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="photo">Profile Photo (<small>For refference just copy/paste <i><strong>https://picsum.photos/200/300</strong></i></small>)</label>
                        <input type="text" onChange={setFormData} className="form-control" id="photo"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <button onClick={saveEmployeeData} type="button" className="btn btn-primary full"><strong>Create Employee</strong></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CreateProfile;