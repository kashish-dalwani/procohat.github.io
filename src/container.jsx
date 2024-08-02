import React from "react";
import img from './assets/bg1.jpeg';
import './container.css';
import { GrLinkNext } from "react-icons/gr";
import img2 from './assets/Group1.png';


const Container1 = () => {
  const divStyle = {
    width: '100vw',
    height: '900px',
    backgroundImage: `url(${img})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <div className="Cont1-img" style={divStyle}>
        <div className="text">
            <div className="smile">
                <h1>Your Smile, Our Expertise</h1>
        </div>
            <div className="para">
                <p>Welcome to ac smiles, your trusted family dentist. We offer 
                comprehensive dental care for all ages, from routine checkups
                and cleanings to cosmetic dentistry and restorative
                treatments. Our experienced team is committed to 
                providing personalized care and ensuring your visit is 
                comfortable and stress-free
            </p>
        </div>
        <button id="book">Book Now <GrLinkNext />
        </button>
        </div>
        <div id="image2">
            <img src={img2} alt="img2" className="img2">
            </img>
        </div>
            
       
    </div>
  );
};

export default Container1