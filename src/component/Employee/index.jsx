import React, { useState, useContext } from "react";
import _, { update } from 'lodash';
import {
    useParams
  } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import { EmployeesListContext } from '../../contexts';

const Employee = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const { updateList, employees } = useContext(EmployeesListContext);
    const user =  _.find(employees, function(o) { return o.id === params.id; });


    const deleteProfile = () => {
        if (window.confirm('Are you sure you want to delete this profile')) {
            user.show = false;
            updateList(employees);
            navigate('/');
        }
    }
    return (
        <>
        <div className="card">
            <div className="body">
            <div className="container addEmployee">
                <div className="row">
                    <div className="col text-center">
                        <img src={user.photo} className="user-dp" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <p>{user.firstName}</p>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <p>{user.lastName}</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth (dd/mm/yyyy)</label>
                        <p>{user.dob}</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-group">
                        <label htmlFor="designation">Designation</label>
                        <p>{user.designation}</p>
                    </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="experience">Experience</label>
                            <p>{user.experience}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group text-center action">
                        <button onClick={() => navigate("/")} type="button" className="btn btn-secondary"><strong>Back</strong></button>
                        <button onClick={() => navigate(`/edit/${user.id}`)} type="button" className="btn btn-primary"><strong>Edit Profile</strong></button>
                        <button onClick={deleteProfile} type="button" className="btn btn-danger"><strong>Delete</strong></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Employee;