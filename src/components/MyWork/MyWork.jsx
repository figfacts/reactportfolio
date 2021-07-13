import React from "react";
import '../../index.css';
//images
import stockWatcher from '../../images/portfolio-01-Stock-Watcher-Square.PNG';
import windyWeather from '../../images/portfolio-02-WindyWeather-Square.png';
import sameDayScheduler from '../../images/portfolio-03-SameDayScheduler-Square.PNG';
import traderJocks from '../../images/portfolio-04-TraderJocks-Square.png';
import workoutTracker from '../../images/portfolio-05-WorkoutTracker-Screen-2-Square.png';

function MyWork() {
    return (
<>
<div className="my-work" id="work"> 
    <h2 className="section__title section__title--work">My work</h2>
    <p className="section__subtitle section__subtitle--work"> A selection of my range of work</p> </div> 

<div className="portfolio">
    <a href="https://figfacts.github.io/Project_1_Genesis_Stock_Watcher/" className="portfolio__item">
        <img src={stockWatcher} alt="Genesis Stock Watcher Project" className="portfolio__img"/> 
    </a>
    <a href="https://figfacts.github.io/WindyWeatherboard/" className="portfolio__item">
        <img src={windyWeather} alt="Windy Weather Project" className="portfolio__img"/>
    </a>

    <a href="https://figfacts.github.io/SameDayScheduler/" className="portfolio__item">
        <img src={sameDayScheduler} alt="Same Say Scheduler Project" className="portfolio__img"/>
    </a>

    <a href="https://traderjocks.herokuapp.com/" className="portfolio__item">
        <img src={traderJocks} alt="Genesis Trader Jocks Project" className="portfolio__img"/>
    </a>

    <a href="https://workouttrackerdf.herokuapp.com/" className="portfolio__item">
        <img src={workoutTracker} alt="Workout Tracker Project" className="portfolio__img"/>
    </a>
    
</div> 
</>
);
}
export default MyWork;
