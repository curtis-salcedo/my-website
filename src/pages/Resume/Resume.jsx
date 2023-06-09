import React from 'react';
import InkCoffee from '../../components/Jobs/InkCoffee';
import Adt from '../../components/Jobs/Adt';
import DHPace from '../../components/Jobs/DHPace';
// import Carousel from 'react-bootstrap/Carousel';
import "./Resume.css";

export default function Resume() {
  return (
    <>
    <div className="borderOne">
    <div className="borderTwo">
    <div className="borderThree">
    <div className="borderFour">
    <div className="borderFive">
    <div className="SectionTitle">Experiences</div>        
    <div id="experience" className="ExperienceContainer">
      <div className="ResumeContainer">
        {/* <div className="ResumeComponents">
          <DHPace />
        </div> */}
        <div className="ResumeComponents">
          <InkCoffee />
        </div>
        <div className="ResumeComponents">
          <Adt />
        </div>
      </div>
      {/* <Carousel variant="dark">
        <Carousel.Item>
          <InkCoffee />
        <div className="resumeContainer">
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="resumeContainer">
          <Adt />
        </div>
        </Carousel.Item>
      </Carousel> */}
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}
