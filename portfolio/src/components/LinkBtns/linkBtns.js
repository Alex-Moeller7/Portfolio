import React from 'react';
import {Link} from 'react-scroll';
import './linkBtns.css';

const LinkBtns = () => {
  return (
    <section id='Btns'>
        <div class="BtnsDiv">
          <div class="linkBtn">
            <Link><button class="btn">About Me</button></Link>
          </div>
          
          <div class="linkBtn">
            <Link><button class="btn">View Portfolio</button></Link>
          </div>

          <div class="linkBtn">
            <Link><button class="btn">View Resume</button></Link>
          </div>
        </div>
    </section>
  )
}

export default LinkBtns