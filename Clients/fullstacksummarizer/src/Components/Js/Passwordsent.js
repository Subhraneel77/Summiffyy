import React from 'react';
import { Link } from 'react-router-dom';
import "../Css/passwordsent.css";
import correct from "../Images/tick.png";


const Passwordsent = () => {
    return ( <
        div className = 'loginpart' >
        <
        div className = "Login" >
        <
        div className = "containtext bucket" >
        <
        div className = "text1" > Password sent < /div> <
        div className = "txt" >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem corrupti repellendus, consequuntur est ducimus voluptas. <
        /div> <
        Link to = "/Login" >
        <
        button className = "backbtn" > Back < /button> <
        /Link> <
        /div>

        <
        div className = "container1 container3" >
        <
        div className = "logtext fortext passtxt2" > Password Sent! < /div> <
        img src = { correct }
        width = "60px"
        alt = ""
        className = 'passimg' / >
        <
        p className = "passtxt" >
        We have sent a reset password email to this mail Id.Please click the reset password link to set your new password and Login. <
        /p> <
        p className = "passtxt1" >
        If you didn 't request a password reset , you can ignore the sent email. Your password will not be changed. <
        /p>


        <
        p className = 'teamthunder' >
        Team Rectors <
        /p> <
        /div> <
        /div> <
        /div>
    )
}

export default Passwordsent