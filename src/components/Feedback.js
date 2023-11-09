import React,{useState} from "react";
import "./Feedback.css";
import {FaFacebookF} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const Feedback=()=> {

  const [message, setMessage]=useState("");

    return (

    <div className="feedback">
        <h1>Welcome to our feedback page</h1>
        <h2>Lets Get your Feedback about our Hospital</h2>
     
     <div className="feedform">

      <div className="form">
        <div className="feed1">
       <h3>What do you think about our Clinical Services?</h3>
       <ul>
      <li>  <label>Excellent:<input type="checkbox"/></label></li>
      <li> <label>Very Good: <input type="checkbox"/></label></li>
      <li> <label>Good: <input type="checkbox"/></label></li>
      <li> <label>Not Good: <input type="checkbox"/></label></li>
       </ul>
        </div>

        <div className="feed2">
       <h3>What is your suggestion about our Patient Care Services?</h3>
       <ul>
      <li> <label>Excellent: <input type="checkbox"/></label></li>
      <li> <label>Very Good: <input type="checkbox"/></label></li>
      <li> <label>Good:<input type="checkbox"/></label></li>
      <li> <label>Not Good: <input type="checkbox"/></label></li>
       </ul>
       </div>

     <div className="feed3">
       <h3>What is your suggestion about our Laboratory Services?</h3>
       <ul>
      <li> <label>Excellent: <input type="checkbox"/></label></li>
      <li> <label>Very Good: <input type="checkbox"/></label></li>
      <li> <label>Good: <input type="checkbox"/></label></li>
      <li> <label>Not Good: <input type="checkbox"/></label></li>
       </ul>
       </div>
      </div>


       <div className="message">
        <h2>If you have any messages write your comments below:</h2>
        <label><input  className="text1" type="textbox" placeholder="Enter your messages here..." 
        value={message} 
        onChange={(e)=> setMessage(e.target.value)}/></label>
       </div>

       <div className="send">
        <button className="btn4">Send</button>
       </div>

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


export default Feedback;




