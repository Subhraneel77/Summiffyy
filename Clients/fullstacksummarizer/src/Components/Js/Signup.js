import React from "react";
import "../Css/login.css";
import { Link } from "react-router-dom";
import "../Css/signup.css";
import { useState, useRef } from "react";
import validator from 'validator';
import { auth } from './Firebase';

const Signup = () => {

    const [signmessage, setsignmessage] = useState("All fields are mandatory *");
    const mailtxt2 = useRef("");
    const pass1 = useRef("");
    const pass2 = useRef("");
    const username = useRef("");


    const signaction = (a, b, c, d) => {
        console.log(a.current.value);
        console.log(b.current.value);
        console.log(c.current.value);
        console.log(d.current.value);
        if (a.current.value === '' || b.current.value === '' || c.current.value === '' || d.current.value === '') {
            setsignmessage("All fields are mandatory *");
        } else if (a.current.value.length < 6) {
            setsignmessage("Username less than 6 characters");
        } else if (!validator.isEmail(b.current.value)) {
            setsignmessage("Please enter a valid email.");
        } else if (c.current.value.length < 8) {
            setsignmessage("Password less than 8 characters");
        } else if (c.current.value !== d.current.value) {
            setsignmessage("Password fields doen't match");
        } else {
            auth.createUserWithEmailAndPassword(
                b.current.value,
                c.current.value
            ).then(response => {
                console.log(response.user)
            }).catch(err => {
                console.log(err)
            })
            setsignmessage("All fields are mandatory *");
            a.current.value = "";
            b.current.value = "";
            c.current.value = "";
            d.current.value = "";

        }

    }

    return ( <
        div className = 'loginpart' >
        <
        div className = "Login" >
        <
        div className = "containtext" >
        <
        div className = "text1" > Signup < /div> <
        div className = "txt" >
        Login Page Design is a login page
        for a Summarizing Text.With clear, beautiful gradients, the interface offers excellent readability.The way the colors are used add vitality to the interface. <
        /div> <
        Link to = "/Login" > < button className = "backbtn" > Back < /button></Link >
        <
        /div>

        <
        div className = "container1" >
        <
        div className = "signuptext" > Signup < /div> <
        div className = "cont1" > < /div> <
        input type = "text"
        className = "textinput1"
        placeholder = "Username"
        ref = { username }
        /> <
        input type = "email"
        className = "textinput1"
        placeholder = "Email ID"
        ref = { mailtxt2 }
        /> <
        input type = "password"
        className = "textinput1"
        placeholder = "Password"
        ref = { pass1 }
        /> <
        input type = "password"
        className = "textinput1"
        placeholder = "Confirm Password"
        ref = { pass2 }
        /> <
        p className = "beta1" > { signmessage } < /p> <
        button className = "signbtn"
        onClick = {
            () => signaction(username, mailtxt2, pass1, pass2) } > Signup < /button> <
        /div> <
        /div> <
        /div>
    );
};

export default Signup;