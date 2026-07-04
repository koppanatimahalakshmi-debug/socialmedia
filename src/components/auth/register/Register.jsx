import React, { Fragment, useContext, useEffect, useState } from 'react'
import { authContext } from '../../../Utilities';
import { useNavigate } from 'react-router-dom';
import Form from '../Form';

const Register = () => {
    let [details, setDetails] = useState({
        name: "",
        email: "",
        current_password: "",
        confrim_password: "",
        gender: "",
        dob: "",
        mobile: "",
        username: "",
    });

    let { addUser, addResponse } = useContext(authContext);
    let {
        name,
        email,
        current_password,
        gender,
        dob,
        mobile,
        username,
        confrim_password,
    } = details;
    let registerData = [
        {
            name: "name",
            type: "text",
            value: name,
            placeholder: "Enter Your Name",
            label: "Name",
        },
        {
            name: "email",
            type: "email",
            value: email,
            placeholder: "Enter Your Password",
            label: "Password",
        },
        {
            name: "current_password",
            type: "password",
            value: current_password,
            placeholder: "Enter Your Password",
            label: "Password",
        },
        {
            name: "confrim_password",
            type: "password",
            value: confrim_password,
            placeholder: "Enter Your Password",
            label: "Confrim Password"
        },
        {
            name: "dob",
            type: "date",
            value: dob,
            label: "Date of Brith",
        },
        {
            name: "mobile",
            type: "tel",
            value: mobile,
            placeholder: "Enter Your Contact Number",
            label: "Contact Number",
        },
        {
            name: "username",
            type: "text",
            value: username,
            placeholder: "Enter Your Username",
            label: "Username",
        },
    ];

    let handleChange = (e) => {
        let { value, name } = e.target;
        setDetails({ ...details, [name]: value });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        if (
      name == "" ||
      email == "" ||
      current_password == "" ||
      confrim_password == "" ||
      mobile == "" ||
      gender == "" ||
      username == "" ||
      gender == ""
    ) {
      alert("Fill All The Fields");  
    } else if (current_password === confrim_password) {
        let detailsObject = {
            name: name,
            email: email,
            password: current_password,
            dob: dob,
            mobile: mobile,
            gender: gender,
            username: username,
            following: [],
            followers: [],
        };
        addUser(detailsObject);
    } else {
        alert("Password Mismatch");
    }
    };
    let navigate = useNavigate();
    let navigatePage = () => {
        navigate("/login");
    };
    useEffect(() => {
        if (addResponse === 201) {
            navigatePage();
        }
    }, [addResponse]);
  return (
    <article>
        <form action="" onSubmit={handleSubmit}>
            <Form data={registerData} handleChange={handleChange}/>
            <aside value={gender} name="gender" onChange={handleChange}>
                <label htmlFor="gender">Gender: </label>
                {["male", "female","other"].map((value) => {
                    return (
                        <Fragment key={value}>
                            <input type="radio" name="gender" value={value} />
                            <span>{value}</span>
                        </Fragment>
                    )
                })}
            </aside>
            <aside>
                <button>Submit</button>
            </aside>
        </form>
    </article>
  )
}

export default Register
