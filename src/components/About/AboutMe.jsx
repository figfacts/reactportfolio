import React from "react";
import "../../index.css";
import devprofilepic from "../../images/dev-david-02.jpg";
function AboutMe() {
  return (
<section className="about-me" id="about"> 
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Software developer based out of DC</p>
        <>
        <div className="about-me__body"><p>Hi I'm David! I graduated from Virginia Commonwealth University (VCU) 2 years ago with a major in Accounting and minor in Chemistry. I am a current student at Georgia Tech, pursuing their full stack developer coding certificate. I'm big into basketball (playing and watching NBA), going to the movies, and traveling. I also try to dabble in whatever I don't know and try to learn it. Feel free to connect with me on LinkedIn or shoot me a message via email. </p></div>
        <img alt="David at Capital One Arena" src={devprofilepic}  className="about-me__img"/> 
        </>
    </section>
);
}

export default AboutMe;