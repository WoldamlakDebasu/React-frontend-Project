import React,{useState} from "react";
import "./Contact.css";
import {FaFacebookF} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";




const Contact=()=> {

    const [title, setTitle]= useState("");
    const [text, setText] = useState("");
    const [body, setBody] = useState("");
    const [email, setEmail]= useState("");

    return (
    <div className="contact">
            <h1>Add Your Contacts below the form</h1>  

      <div className="demo">

            <form className="demo1">    
            <label>First Name:</label>
            <input className="in1" type="text"
             value={title} 
             onChange={(e)=> setTitle(e.target.value)}
             placeholder="Enter your First Name"
             required/>
          

             
            <label>Middle Name:</label>
            <input className="in2"  type="text" 
            placeholder="Enter Your Middle Name" 
            value={text}
            onChange={(e)=> setText(e.target.value)}
            required/>
       


               
            <label>Last Name:</label>
            <input  className="in3" type="text"
             placeholder="Enter Your Last Name" 
             value={body}
             onChange={(e)=> setBody(e.target.value)}
             required/>
          
             
             
            <label>Email:</label>
            <input className="in4" type="text" 
            placeholder="Enter Your Email Address" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required/>

            <button className="btn3">Submit</button>
            </form>
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

export default Contact;





