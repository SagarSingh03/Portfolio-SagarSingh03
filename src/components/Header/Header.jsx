import React from 'react'
import './Header.css'
import sagar from '../../assets/sagar.png'
import { Link } from 'react-scroll'


function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <h1>About</h1>
        <strong>Hey I'm Sagar</strong> <br/>
        <label>curious, Tinkerer, and explorer</label> 
        <p>As a dedicated front-end developer, I specialize in crafting dynamic and user-centric web applications using HTML, CSS, JavaScript, and modern frameworks like React, alongside tools such as Material-UI, Bootstrap, Tailwind CSS, and Aceternity UI. My portfolio includes impactful projects such as a food delivery website, a real estate platform, a currency converter, a movie database site, a Rock-Paper-Scissor game, demonstrating my ability to build responsive, accessible, and high-performance interfaces. Proficient in Git for version control and skilled in testing, debugging, and web performance optimization, I prioritize clean, maintainable code to deliver seamless user experiences. With strong problem-solving, communication, and teamwork skills, I thrive in collaborative environments and am eager to learn and grow, bringing enthusiasm and adaptability to every project as I build my career in front-end development.</p>
      </div>

      <div className='header-right'>
        <img className="profile-image" src={sagar} alt="Sagar Singh"/>
      </div>
    </div>
  )
}

export default Header

