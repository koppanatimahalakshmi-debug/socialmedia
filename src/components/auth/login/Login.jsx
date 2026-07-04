import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../../Utilities';
import { useNavigate } from 'react-router-dom';
import Form from '../Form';

const Login = () => {
  let [ details, setDetails] = useState({
    email: "",
    password: "",
  });
  let { email, password } = details;

  let { validation, loginResponse } = useContext(authContext);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({... details, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Fill All The Fields");
    } else {
      console.log(details);
      validation(email, password);
    }
  };
  let navigate = useNavigate();

  let homePageNavigate = () => {
    navigate("/");
  };
  useEffect(() => {
    if (loginResponse === true) {
      console.log("Login Successful");
      homePageNavigate();
    }
  }, [loginResponse]);
  let loginData = [
    {
      name: "email",
      value: email,
      placeholder: "Enter Your Email",
      label : "Email",
      type: "text"
    },
    {
      name: "password",
      value: password,
      placeholder: "Enter Your Password",
      label: "Password",
      type: "password"
    }
  ]
  return (
    <form onSubmit={handleSubmit}>
      <Form data={loginData} handleChange={handleChange}/>
      <aside>
        <button>Submit</button>
      </aside>
    </form>
  )
}

export default Login
