import React, { useState, useContext } from "react";
import { defaultNewUserData } from "../../../utilities";
import { nanoid } from 'nanoid'
import _ from 'lodash'
import {
    useParams, useNavigate
  } from "react-router-dom";


import { EmployeesListContext } from '../../../contexts';

const EditProfile = () => {
    
    const params = useParams();
    const navigate = useNavigate();
    
    const { employees } = useContext(EmployeesListContext);
    const user =  _.find(employees, function(o) { return o.id === params.id; });


    const saveEmployeeData = () => {
        // userData["id"]= nanoid();
        // userData["show"]= true;
        // pushNewEmployeeData(userData);
        // setUserData(defaultNewUserData);
        // navigate('/');
    }

    const setFormData = e => {
        const value = e.currentTarget.value;
        const key = e.currentTarget.id;

        //let data = Object.assign({}, userData);
        //data[key] = value;
        //setUserData(data);
    }

    return (
        <>
        <div className="card">
            <div className="body">
            <div className="container addEmployee">
                <div className="row">
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" value={user.firstName} onChange={setFormData} className="form-control" id="firstName"/>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" value={user.lastName} onChange={setFormData} className="form-control" id="lastName"/>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth (dd/mm/yyyy)</label>
                        <input type="text" value={user.dob} onChange={setFormData} className="form-control" id="dob"/>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="designation">Designation</label>
                        <input type="text" value={user.designation} onChange={setFormData} className="form-control" id="designation"/>
                    </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="experience">Experience</label>
                            <input type="number" value={user.experience} onChange={setFormData} className="form-control" id="experience"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="photo">Profile Photo (<small>For refference just copy/paste <i><strong>https://picsum.photos/200/300</strong></i></small>)</label>
                        <input type="text" value={user.photo} onChange={setFormData} className="form-control" id="photo"/>
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

export default EditProfile;