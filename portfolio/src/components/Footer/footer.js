import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <footer>
        <div class="footerContainer">
            <div class="socialIcons">
            <a href=""><i class='fa-brands fa-facebook'></i></a>
            <a href=""><i class='fa-brands fa-github'></i></a>
            <a href=""><i class='fa-brands fa-linkedin'></i></a>
            <a href=""><i class="fa-solid fa-envelope"></i></a>
        </div>

        <div class="footerNav">
            <ul>
                <li><a href=""></a>Home</li>
                <li><a href=""></a>About</li>
                <li><a href=""></a>Portfolio</li>
                <li><a href=""></a>Resume</li>
            </ul>
        </div>

        <div class="footerBot">
            <p>Copyright &copy;2024; Designed by <span className='designer'>Alex Moeller</span></p>
        </div>
        </div>
    </footer>
  )
}

export default footer