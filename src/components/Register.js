import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { homeId } from './MenuItems';
const string = require("string-sanitizer");
const { phone } = require('phone');
const validator = require("express-validator");

const Register = props => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirm: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirm: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let errors = {};
    let isValid = true;
    let sanitized = {};

    // first name
    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
      isValid = false;
    } else {
      errors.firstName = '';
      sanitized.firstName = string.sanitize.keepUnicode(formData.firstName);
    }

    // last name
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
      isValid = false;
    } else {
      errors.lastName = '';
      sanitized.lastName = string.sanitize.keepUnicode(formData.lastName);
    }

    // email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!string.validate.isPassword8to15(formData.email)) {
      errors.email = 'Email is not valid';
      isValid = false;
    } else {
      errors.email = '';
      sanitized.email = formData.email;
    }

    // phone
    if (!formData.phone.trim()) { 
      errors.phone = 'Phone is required';
      isValid = false;
    } else {
      const phoneCheck = phone(formData.phone);
      if (!phoneCheck.isValid) {
        errors.phone = 'Phone not valid'
        isValid = false 
      } else {
        errors.phone = '';
        sanitized.phone = phoneCheck.phoneNumber;
      }      
    }

    // password
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (!string.validate.isPassword8to15(formData.password)) {
      errors.password = 'Password not in a valid format: at least 1 lower case, 1 UPPER case, 1 digit, 1 special character';
      isValid = false;
    } else {
      errors.password = '';
    }
    
    // confirm
    if (!formData.confirm.trim()) {
      errors.confirm = 'Confirm password is required';
      isValid = false;
    } else if (!string.validate.isPassword8to15(formData.confirm)) {
      errors.confirm = 'Password not in a valid format: at least 1 lower case, 1 UPPER case, 1 digit, 1 special character';
      isValid = false;
    } else {
      errors.confirm = '';
    }

    // compare password and confirmation
    if (errors.password === '' && errors.confirm === '') {
      if (formData.password !== formData.confirm) {
        errors.confirm = 'Passwords do not match'
        isValid = false;
      } else {
        sanitized.password = formData.password;
        sanitized.confirm = formData.confirm;
      }
    }

    setFormErrors(errors);
    if (isValid) {
      setFormData(sanitized);
    }
    return isValid;
  }

  const cancelButtonClicked = () => {
    navigate('/');
    props.parentFunction(homeId)    
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted: ', formData);
    } else {
      console.log('Form validation failed');
    }
  }  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (       
    // <form onSubmit={submitForm()}> 
    <form onSubmit={handleSubmit}> 
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputFirstName" class="form-label">First Name</label>
          <input
            type="text"
            class={`form-control ${formErrors.firstName && 'is-invalid'}`}            
            id="inputFirstName"
            name="firstName"            
            value={formData.firstName}            
            onChange={handleInputChange}            
          />
          <div class="invalid-feedback">{formErrors.firstName}</div>          
        </div>
      </div>      
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputLastName" class="form-label">Last Name</label>
          <input
            type="text"
            class={`form-control ${formErrors.lastName && 'is-invalid'}`}
            id="inputLastName"
            name="lastName"               
            onChange={handleInputChange}
          />
          <div class="invalid-feedback">{formErrors.lastName}</div>
        </div>
      </div>      
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputEmail" class="form-label">Email</label>
          <input
            type="text"            
            class={`form-control ${formErrors.email && 'is-invalid'}`} 
            id="inputEmail"
            name="email"            
            onChange={handleInputChange}
          />
          <div class="invalid-feedback">{formErrors.email}</div>
        </div>
      </div>      
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputPhone" class="form-label">Phone</label>
          <input
            type="text"            
            class={`form-control ${formErrors.phone && 'is-invalid'}`} 
            id="inputPhone"
            name="phone"            
            onChange={handleInputChange}
          />
          <div class="invalid-feedback">{formErrors.phone}</div>
        </div>
      </div>
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputPassword" class="form-label">Password</label>
          <input
            type="password"            
            class={`form-control ${formErrors.password && 'is-invalid'}`} 
            id="inputPassword"
            name="password"
            onChange={handleInputChange}
          />
          <div class="invalid-feedback">{formErrors.password}</div>
        </div>
      </div>      
      <div class="row m-3">
        <div class="col-md-4">
          <label for="inputConfirm" class="form-label">Confirm Password</label>
          <input
            type="password"            
            class={`form-control ${formErrors.confirm && 'is-invalid'}`} 
            id="inputConfirm"
            name="confirm"
            onChange={handleInputChange}
          />
          <div class="invalid-feedback">{formErrors.confirm}</div>
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