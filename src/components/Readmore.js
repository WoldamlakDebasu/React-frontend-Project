import React,{useState} from "react";
import "./Home.css";



const Readmore=({children})=>{
const fullText=children;

const [showText, setShowText]=useState(false);

const toggleText=()=> {
    setShowText(!showText);
};

return(
    <div className="footer">
    {showText ? fullText: `${fullText.slice(0, 200)}...`}
    <button className="btn" onClick={toggleText}>{showText? 'Read Less' : '...Read More'}</button>
    </div>
)
}


export default Readmore;













