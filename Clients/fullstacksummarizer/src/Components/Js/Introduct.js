import React from "react";
import "../Css/introduct.css";
import { Link } from "react-router-dom";
import abstract from "../Images/abs.jpg";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaPinterest,
} from "react-icons/fa";

const Introduct = () => {


    return ( <
        div >
        <
        div className = "navbar" >
        <
        div className = "logo" > Summify < /div> <
        ul className = "navitems" >
        <
        li >
        <
        a href = "#home" > Home < /a> < /
        li > <
        li >
        <
        a href = "#about" > Services < /a> < /
        li > <
        li >
        <
        a href = "#Services" > Contact < /a> < /
        li > <
        li >
        <
        a href = "#Login" > Login < /a> < /
        li > <
        /ul> < /
        div >

        <
        div className = "mainintrobody" >
        <
        div className = "introbody1" >
        <
        /div>

        <
        div className = "introbody" >
        <
        div className = "intro_content1" >
        <
        div className = "introtxts" >
        <
        p className = "introhead" >
        Summify: A Platform Which does Abstractive Text Summarization <
        /p> <
        p className = "introsubtxt" > Rectors Team— September 17, 2022 < /p> < /
        div > <
        img src = { abstract }
        alt = ""
        width = "70%" / >
        <
        p className = "introinfo" >
        Our product is mainly a website which can summarize huge paragraphs and articles into shorter ones which will consist of the most relevant information that the user would want to know from that article or paragraph.Moreover, this summarized article would get saved into user’ s database so that whenever the user requires it he / she could look it in their History. <
        /p> <
        p className = "introinfo" >
        Moreover, User can also get any summarized information about any relevant topic here.For this purpose the user needs to give the topics they want to get information about as the input into the search as text or in voice.Then our website would search
        for the most relevant articles over the web.It would summarize that article.Finally, it will
        return that summarized article to our
        user.Thus, our website is also summarizing the articles over web.Moreover, we have also got a trending section which displays the trending news from all over the world.Bussiness perspective: we would also make an API which the third party users can also use it on monthly or yearly subscription. <
        /p> <
        Link to = './Login' > < button > Login < /button></Link >
        <
        hr / >
        <
        /div> < /
        div >

        <
        div className = "introbody1" > < /div> < /
        div >

        <
        footer className = "footer-distributed" >
        <
        div className = "footer-left" >
        <
        h3 >
        About < span > Sumiiffy < /span> < /
        h3 >

        <
        p className = "footer-links" >
        <
        a href = "#home" > HOME < /a> |<a href="#home">BLOG</a > |
        <
        a href = "#home" > ABOUT < /a> |<a href="#home">CONTACT</a >
        <
        /p>

        <
        p className = "footer-company-name" > ©2022 @rectors.com < /p> < /
        div >

        <
        div className = "footer-center" >
        <
        div >
        <
        i className = "fa fa-map-marker" > < /i> <
        p >
        <
        span > 262 A N.S.C.Bose Road, Bansdroni < /span> Kolkata, West
        Bengal - 700046 <
        /p> < /
        div >

        <
        div >
        <
        i className = "fa fa-phone" > < /i> <
        p > +91 8910324180 < /p> < /
        div > <
        div >
        <
        i className = "fa fa-envelope" > < /i> <
        p >
        <
        a href = "mailto:support@thunderbowls.com" >
        support @rectors.com <
        /a> < /
        p > <
        /div> < /
        div > <
        div className = "footer-right" >
        <
        p className = "footer-company-about" >
        <
        span > About our Rectors < /span> We work with Ideologies with
        proper Dedication and Determination--Love to Code { " " } <
        /p> <
        div className = "footer-icons" >
        <
        a href = "#git" >
        <
        FaGithub className = "icon1" / >
        <
        /a> <
        a href = "#twit"
        className = "icon2" >
        <
        FaTwitter / >
        <
        /a> <
        a href = "#inst"
        className = "icon3" >
        <
        FaInstagram / >
        <
        /a> <
        a href = "#link"
        className = "icon4" >
        <
        FaLinkedin / >
        <
        /a> <
        a href = "#pin"
        className = "icon5" >
        <
        FaPinterest / >
        <
        /a> < /
        div > <
        /div> < /
        footer > <
        /div>
    );
};

export default Introduct;