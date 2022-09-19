import React, { useRef, useState, useEffect } from 'react';
import "../Css/mainpage.css";
import { collection, addDoc } from 'firebase/firestore';
import database from './Firebase';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";



const Mainpage = () => {
    const summarisation_txt = useRef("");
    const tittletxt = useRef("");
    const [frontdata, setfrontdata] = useState("");
    const [Backend, setBackend] = useState({});
    const [savemessage, setsavemessage] = useState("All fields are mandatory*")
    const collectionRef = collection(database, 'users')
    const [uide, setuide] = useState("");







    useEffect(() => {
        fetch(`http://localhost:6001/summarize?article=${frontdata}`)
            .then(
                response => response.json()
            )
            .then(data => {
                setBackend(data);
                const auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        setuide(user.uid);
                    } else {
                        console.log("No user")
                    }
                });

            })
    }, [frontdata])





    const Summarisation_processing = (sum_text) => {
        setfrontdata(sum_text);
        console.log(sum_text)
    }





    const addDatabase = (title) => {
        if (Backend.Summary === "" && title === "") {
            setsavemessage("All fields are mandatory *");
        } else if (title === "") {
            setsavemessage("Please give a Proper Title *")
        } else {
            addDoc(collectionRef, {
                    user_id: uide,
                    tittle: title,
                    summary: Backend.Summary,

                })
                .then(() => {
                    alert("Data added");
                })
                .catch((err) => {
                    alert(err.message);
                })
        }
    }


    return ( <
        div className = "Main_Home" >
        <
        div className = "Textsumm_Box" >
        <
        textarea type = "text"
        className = "Textsum_container"
        ref = { summarisation_txt }
        /> <
        button className = 'textsumbtn'
        onClick = {
            () => Summarisation_processing(summarisation_txt.current.value) } > Summarise < /button>

        <
        div className = "mainHometext" >
        <
        div className = "textoutputhead" > Summary: < /div> <
        div className = "textoutput" > { Backend.Summary } < /div> <
        div className = "textoutput textoutput1" > Number of words before Summarisation: { Backend.BeforeSummarisation } < /div> <
        div className = "textoutput textoutput1" > Number of words after Summarisation: { Backend.AfterSummarisation } < /div> <
        /div> <
        input type = "text"
        placeholder = 'Enter the title of your summarized article'
        className = 'SummiTitle'
        ref = { tittletxt }
        /> <
        div >
        <
        p className = 'savemessage' > { savemessage } < /p> <
        /div> <
        button className = 'textsumbtn textsumbtn1'
        onClick = {
            () => addDatabase(tittletxt.current.value) } > Save < /button> <
        Link to = '/History' > < button > Watch History < /button></Link >
        <
        Link to = '/Login' > < button > Logout < /button></Link >
        <
        /div>     <
        /div>
    )
}

export default Mainpage