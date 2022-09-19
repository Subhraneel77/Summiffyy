import React from 'react';
import "../Css/login.css";
import logo from "../Images/google.png";
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import validator from 'validator';
import { auth, googleProvider } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';


const Login = () => {
    const [logmessage, setlogmessage] = useState("Please Enter Your Credentials");
    const mailtxt = useRef("");
    const passwordtxt = useRef("");
    const navigate = useNavigate();










    const logaction = (a, b) => {
        console.log(a.current.value);
        console.log(b.current.value);
        if (a.current.value === "" || b.current.value === "") {
            setlogmessage("All fields are mandatory");
        } else if (!validator.isEmail(a.current.value)) {
            setlogmessage("please enter a valid email.");
        } else if (b.current.value.length < 8) {
            setlogmessage("password less than 8 characters");
        } else {
            auth.signInWithEmailAndPassword(
                    a.current.value,
                    b.current.value
                ).then(user => {
                    navigate('/Home_page');
                    //alpha.change(user.user.uid);

                })
                .catch(err => {
                    console.log(err);
                    setlogmessage("Invalid User");
                })
            setlogmessage("");
            a.current.value = '';
            b.current.value = '';

        }

    }




    const signinwithGoogle = () => {
        auth.signInWithRedirect(googleProvider)
            .then((res) => {
                console.log(res.user);
            })
            .catch(function(error) {
                console.log(error.message);
            })
    }





    return ( <
        div className = 'loginpart' >
        <
        div className = "Login" >
        <
        div className = "containtext" >
        <
        div className = "text1" > Login < /div> <
        div className = "txt" >
        Login Page Design is a login page
        for a Summarizing Text.With clear, beautiful gradients, the interface offers excellent readability.The way the colors are used add vitality to the interface. <
        /div> <
        Link to = "/" > < button className = "backbtn" > Back < /button></Link >
        <
        /div>

        <
        div className = "container1" >
        <
        div className = "logtext" > Login < /div> <
        div className = "cont1" >
        <
        /div><input type="email" className="textinput1" placeholder="Email ID" ref={mailtxt} / >
        <
        input type = "password"
        className = "textinput1"
        placeholder = "Password"
        ref = { passwordtxt }
        />   <
        p className = "beta" > { logmessage } < /p>

        <
        Link to = "" > < button className = "loginbtn"
        onClick = {
            () => logaction(mailtxt, passwordtxt)
        } > Login < /button></Link >
        <
        p className = "signup" > Don 't have an account? <Link to="/Signup">Signup</Link></p> <
        Link to = "/Forgotpass"
        className = "forgotpass" > Forgot password ? < /Link> <
        button className = "Googlebtn"
        onClick = {
            () => signinwithGoogle()
        } >
        <
        img src = { logo }
        width = "21px"
        alt = "error"
        className = "googleicon" / >
        <
        p className = "googleicon1" > Google Signup < /p></button >
        <
        /div> < /
        div > <
        /div>
    )
}

export default Login