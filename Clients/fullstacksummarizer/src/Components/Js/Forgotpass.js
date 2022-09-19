import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/login.css";
import "../Css/forgotpass.css";
import { useState,useRef } from "react";
import validator from 'validator';
import { auth } from "./Firebase";

const Forgotpass = () => {
  const navigate = useNavigate();
  const [mailmessage, setmailmessage] = useState("Please enter your email");
  const mailtxt3 = useRef("");

  const forgotaction=(a)=>{
    console.log(a.current.value);
    if(!validator.isEmail(a.current.value)){
      setmailmessage("please enter a valid email.");
    }
    else{
      auth.sendPasswordResetEmail(
        a.current.value
      ).then(()=>{
        navigate('/Passwordsent')
      }).catch(()=>setmailmessage("Please enter registered email."))
      setmailmessage("Please enter your email");
    }

  }

  return (
    <div className='loginpart'>
      <div className="Login">
        <div className="containtext bucket">
          <div className="text1">Forgot Password</div>
          <div className="txt">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem corrupti repellendus, consequuntur est ducimus
            voluptas.
          </div>
          <Link to="/Login">
            <button className="backbtn">Back</button>
          </Link>
        </div>

        <div className="container1">
          <div className="logtext fortext">Reset Password</div>
          <div className="cont1"></div>
          <input type="email" className="textinput1 textinput2" placeholder="Email ID" ref={mailtxt3}/>
          <p className="betatxt">{mailmessage}</p>
          <Link to=""><button className="loginbtn forgotbtn resetbtn" onClick={()=>forgotaction(mailtxt3)}>Reset</button></Link>
          <p className="alphatxt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rem vero culpa corrupti nulla consequuntur aliquam quo soluta veritatis, ipsum quas possimus commodi dicta facere. Hic eaque deleniti ea!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgotpass;
