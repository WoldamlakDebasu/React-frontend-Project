import React, {useState} from "react";
import "./Home.css";
import images1 from "../images/hospital.jpg";
import {FaFacebookF} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import Readmore from './Readmore';


const Home=()=> {

    return (
        <div className="main">
        <div className="home">
        <div className="header">
            <h1>Welcome to our Site!</h1>
            <p>Large hospitals, consisting of a thousand beds or
                 more, emerged during the early nineteenth century 
                 in France when Napoleon established them to house his 
                 wounded soldiers from his many wars. These hospitals became 
                 centers for clinical teaching.</p>
        </div>
        <div className="body">
            <h1>Our Services</h1>
           <img src={images1} alt="our hospital" width="600" height="500"/>
        </div>
        </div>

    
        <div className="footer">
            <h1>Let's tell you about our services.</h1>
           <Readmore>
            <p> 
                Hospitals matter to people and often mark central 
                points in their lives. They also matter to health 
                systems by being instrumental for care coordination 
                and integration. They often provide a setting for education 
                of doctors, nurses and other health-care professionals and 
                are a critical base for clinical research. A hospital is a 
                place where a person goes to be healed when he or she is sick or 
                injured. The difference between a hospital and other healthcare places 
                like a clinic or a doctor's office is that a hospital will have beds 
                where patients can stay overnight.</p>

                <p>Hospitals matter to people and often mark central 
                points in their lives. They also matter to health 
                systems by being instrumental for care coordination 
                and integration. They often provide a setting for education 
                of doctors, nurses and other health-care professionals and 
                are a critical base for clinical research. A hospital is a 
                place where a person goes to be healed when he or she is sick or 
                injured. The difference between a hospital and other healthcare places 
                like a clinic or a doctor's office is that a hospital will have beds 
                where patients can stay overnight. </p>

                <p>Hospitals matter to people and often mark central 
                points in their lives. They also matter to health 
                systems by being instrumental for care coordination 
                and integration. They often provide a setting for education 
                of doctors, nurses and other health-care professionals and 
                are a critical base for clinical research. A hospital is a 
                place where a person goes to be healed when he or she is sick or 
                injured. The difference between a hospital and other healthcare places 
                like a clinic or a doctor's office is that a hospital will have beds 
                where patients can stay overnight.</p>
                </Readmore>
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


export default Home;




