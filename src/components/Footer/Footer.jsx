import React from 'react'
import './Footer.css';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

function Footer() {
  return (
    <div className="Footer">
      <div className="footer">
        <h4>Sagar Singh</h4> <br/>
        <p>© 2025 Made with creativity, coffee, and clean code. All rights reserved</p>
      </div>

      <div className="social-links">
        <a href="https://www.instagram.com/maisagarhoon_03/" target="_blank"> <img src={instagram} alt="Instagram"/></a>
        <a href="https://x.com/Sagar_Singh03" target="_blank"> <img src={twitter}/></a>
        <a href="https://www.linkedin.com/in/sagar-singh03/" target="_blank"> <img src={linkedin}/></a>
        <a href="https://github.com/SagarSingh03" target="_blank"> <img src={github}/></a>
      </div>
    </div>
  )
}
export default Footer;


