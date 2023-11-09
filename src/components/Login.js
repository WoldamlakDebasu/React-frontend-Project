import React, {useState} from "react";
import "./Login.css";
import {FaFacebookF} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Login= ()=> {

    const [use , setUse]= useState("");
    const [pass, setPass]= useState("");

    return (
    <div className="login">

    <div className="login1"> 
    <h1>Login</h1>
    <input type="text" placeholder="User Name" className="logi" value={use} onChange={(e)=> setUse(e.target.value)}/>
    <input type="password" placeholder="Password"  className="logs" value={pass} onChange={(e)=> setPass(e.target.value)}/>
    <button className="btn2">Login</button>
  </div>


              <div className="min-contact">
              <div className="con1">
            <ul>
                <li><a href="#">Privacy Plicy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Authorship Information</a></li>
            </ul>
            </div>

            <div className="con2">
                <ul>
            <li>Phone:+251-958817656</li>
            <li>Email: woldamlak@aau.edu.et</li>
            <li>@Copyright</li>
            </ul>
            </div>

            <div className="con3">
             <ul>
            <li><a href="#"><FaFacebookF/></a></li>
            <li><a href="#"><FaTelegram/></a></li>
            <li><a href="#"><FaTwitter/></a></li>
            <li><a href="#"><FaInstagram/></a></li>
              </ul>
            </div>
        </div>
        </div>
    )
}


export default Login;















