import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Login from "./components/Login";
import Signin from "./components/Signin";
import {FaAlignJustify} from "react-icons/fa";
import "./App.css";


const Navbar=()=> {

    const [showlinks, setShowlinks]= useState(false);

    return (
        <Router>
        <div className="body">
        <div className="navbar">
        <ul className="lists" id={showlinks ? "hidden" : ""}>
                    <li>
                        <Link to="/" className="first">Home</Link>
                    </li>

                    <li>
                        <Link to="/about" className="second">About</Link>
                    </li>

                    <li>
                        <Link to="/contact" className="third">Contact</Link>
                    </li>

                    <li>
                        <Link to="/feedback" className="fourth">Feedback</Link>
                    </li>

                    <li>
                        <Link to="/login" className="fifth"> Login </Link>
                    </li>

                    <li>
                        <Link to="/signin" className="sixth"> Sign Up</Link>
                    </li>
                </ul>
            <button className="bar" onClick={()=> setShowlinks(!showlinks)}><FaAlignJustify/></button>
        </div>

       

        <div className="main-body">
        
                <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signin" element={<Signin/>}/>  
                </Routes>
            
        </div>
        </div>
        </Router>
    )
}


export default Navbar;



