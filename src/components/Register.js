import React from 'react';
import { useNavigate } from 'react-router-dom';
import { homeId } from './MenuItems';
const validator = require("express-validator");

const Register = props => {

  const navigate = useNavigate()

  function submitForm() {   
    alert('Form submitted');    
  }

  function cancelButtonClicked() {    
    navigate('/');
    props.parentFunction(homeId)    
  }

  return (       
    // <form onSubmit={submitForm()}> 
    <form> 
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputFirstName" class="form-label">First Name</label>
          <input type="text" class="form-control" id="inputFirstName" placeholder="John" />
        </div>
      </div>      
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputLastName" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="inputLastName" placeholder="Smith"/>
        </div>
      </div>      
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputEmail" class="form-label">Email</label>
          <input type="text" class="form-control" id="inputEmail" placeholder="john@email.com" />
        </div>
        <div class="invalid-feedback">
          Please enter valid Email.
        </div>
      </div>      
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputPhone" class="form-label">Phone</label>
          <input type="text" class="form-control" id="inputPhone" placeholder="(800) xxx-xxxx"/>
        </div>
      </div>
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>      
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputConfirm" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" id="inputConfirm" />
        </div>
      </div>      
      <div class="btn-toolbar mt-3 ms-4"> 
        <button type="submit" id="btnSubmit" class="btn btn-primary me-3" >Register</button>
        <button type="button" id="btnCancel" class="btn btn-danger" onClick={cancelButtonClicked}>Cancel</button>
      </div>
    </form>
  )
};

export default Register;