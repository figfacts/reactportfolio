import React from "react";
import "../../index.css";
import profilepic from "../../images/profilepic.jpg";

function Intro() {
  return (
    <section className="intro" id="home">
        <h1 className="section__title section__title--intro"> Hi, I'm <strong>David Figueroa</strong></h1>
        <p className="section__subtitle section__subtitle--intro"> a software developer</p>
        <>
        <img src={profilepic} alt="a profile picture of David Figueroa" className="intro__img"/>
        </> 
    </section> 
    
);
}

export default Intro;