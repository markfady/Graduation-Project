import React, { useState } from "react";
import "../Donation/Login.css";

const LoginAdmin = () => {
  const initialvalues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target; // we need name of input and it's value where are located in e.target
    setFormValues({ ...formValues, [name]: value });

  };
  const handlesubmit = (e) =>{
    setFormErrors(validate(formValues));
  }

  const validate=(values)=>{
    const errors={}
    const regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!regex.test(values.email)){
      errors.email="Enter Valid E-mail!";
    }
    if(values.password.length <= 4){
      errors.password="Password must be more  than 4";
    }
    else if(values.password.length > 30) {
      errors.password="Password cannot exceed  30 characters";
    }
    return errors;

  }
  
  return (
    <>
      <div className="Login">
        <div className="container">
          <div className="center">
            <h1 className="text-center">Admin Login</h1>
            <form 
            action="http://localhost:8000/LoginAdmin.php"
            onSubmit={handlesubmit}
            method="post"
            >
              <div className="text-field">
                <input
                  type="email"
                  name="email" //refrence this data to emial in initialvalues
                  required
                  value={formValues.email}
                  onChange={handlechange}

                />
                <label>Email</label>
              </div>
              <p className="pt-0"> {formErrors.email}</p>
              <div className="text-field">
                <input
                  type="password"
                  name="password"
                  required
                  value={formValues.password}
                  onChange={handlechange}
                />
                <label>Password</label>
              </div>
              <p> {formErrors.password}</p>
              <div className="submit">
                <input
                  type="submit"
                  value="Login"
                  name="signin"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
