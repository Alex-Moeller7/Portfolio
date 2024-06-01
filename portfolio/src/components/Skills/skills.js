import React from 'react';
import './skills.css';
import WebDesign from '../../assets/webDesignImg.png';
import WebDev from '../../assets/webDevImg.png';
import AppDev from '../../assets/appDevImg.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span class="skillTitle">My Strengths</span>
        <span class="skillDesc">I'm a Software Engineering student at Iowa State University with experience in HTML, CSS, JavaScript, React, Java, and PHP.
        </span>
        <div class="skillBars">
            <div class="skillBar">
              <img src={WebDev} alt="WebDevelopment" class="skillBarImg"/>
              <div class="skillBarText">
                <h2>Web Development/Web Scraping</h2>
                <p>Expert in web creation and data extraction.</p>
              </div>
            </div>

            <div class="skillBar">
              <img src={AppDev} alt="AppDevelopment" class="skillBarImg"/>
              <div class="skillBarText">
                <h2>Full Stack Application Development</h2>
                <p>Proficient in full-stack app development.</p>
              </div>
            </div>

            <div class="skillBar">
              <img src={WebDesign} alt="WebsiteDesign" class="skillBarImg"/>
              <div class="skillBarText">
                <h2>Website Design</h2>
                <p>Skilled in designing user-friendly websites.</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Skills