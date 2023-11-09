import React from "react";
import "./About.css";
import image2 from "../images/Service.jpg";
import image3 from "../images/Service2.jpg";
import image4 from "../images/Service3.jpg";
import image5 from "../images/Service4.jpg";
import image6 from "../images/pat1.jpg";
import image7 from '../images/pat2.jpg';
import image8 from "../images/pat3.jpg";
import {FaFacebookF} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const About=()=> {
    return (
        <div className="about">
            <div className="head">
                <div className="aboutus">
            <h1>Let's show you to know more about us!</h1>
            <p> Welcome to our hospital, where compassionate care meets cutting-edge medical services. 
                At our hospital, we are dedicated to providing exceptional healthcare services with a focus 
                on the well-being of our community. Our team of highly skilled and experienced medical professionals 
                is committed to delivering personalized and comprehensive care to meet the unique needs of each patient. 
                From routine check-ups to specialized treatments, we offer a wide range of medical services designed to 
                promote health, prevent illness, and address a variety of medical conditions. With state-of-the-art facilities 
                and advanced technology, we strive to deliver the highest quality of care in a comfortable and supportive
                 environment. At our hospital, your health and wellness are our top priorities,
                 and we look forward to serving you with excellence and compassion.</p>
           </div>

           <div className="aboutus2">
            <h1>About Us</h1>

            <div className="images">

                <div className="img1">
                    <h2>Follow-Ups</h2>
            <img src={image2} alt="our main-services" />
                </div>

                <div className="img2">
                    <h2>Our Bed Services</h2>
            <img src={image3} alt="our main-services"/>
                </div>

                <div className="img3">
                    <h2>Our Check-ups</h2>
            <img src={image4} alt="our main-services"/>
                </div>

                <div className="img4">
                    <h2>Our Lab Service</h2>
            <img src={image5} alt="our main-services"/>
                </div>
        
           </div>
           </div>

             <div className="testimon">
          <h1>Lets show you our Testimonials</h1>
             </div>
          <div className="testimonials">
           
           <div className="test1">
            <img src={image6} width="100" height="100"/>
            <h1>Henry Johnson</h1>
            <h2> Former Patient</h2>
            <p>I have get my health back after 
                i get a supportive treatment in your 
                hospital,the laboratories are efficient 
                and the testing service of the hospital is 
                really amazing and the clinical medical service 
                was the best experience i have ever seen in my life. </p>
           </div>

           <div className="test2">
            <img src={image7} width="100" height="100"/>
            <h1>John Smith</h1>
            <h2>Former Cancer Patient</h2>
            <p>I have get my health back after 
                i get a supportive treatment in your 
                hospital,the laboratories are efficient 
                and the testing service of the hospital is 
                really amazing and the clinical medical service 
                was the best experience i have ever seen in my life. </p>
           </div>
           
           <div className="test3">
            <img src={image8} width="100" height="100"/>
            <h1>Henry Johnson</h1>
            <h2>Former Patient</h2>
            <p>I have get my health back after 
                i get a supportive treatment in your 
                hospital,the laboratories are efficient 
                and the testing service of the hospital is 
                really amazing and the clinical medical service 
                was the best experience i have ever seen in my life. </p>
           </div>

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



export default About;


