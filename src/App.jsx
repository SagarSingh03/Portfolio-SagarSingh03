import React from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Skill from './components/Skills/Skill'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import { Element } from 'react-scroll'
function App() {
  return (
    <div className="App">
      <Navbar />

      <Element name="header">
        <Header />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="skill">
        <Skill />
      </Element>

      <Element name="education">
        <Education />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />

    </div>
  )
}

export default App

