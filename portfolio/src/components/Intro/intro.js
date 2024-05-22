import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import contactMe from '../../assets/contactMe.png';
const Intro = () => {
  return (
    <section id = "intro">
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className='introName'>Alex</span> <br/> Software Engineer</span>
            <p class="introPara">I am a versatile Software Engineering student at Iowa State University with hands-on experience in academic and professional settings.</p>
            <Link><button class="btn"><img src={contactMe} alt="Contact Me"/>Contact Me</button></Link>        
        </div>
    </section>
  )
}

export default Intro