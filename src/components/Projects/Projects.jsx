import React from 'react'
import './Projects.css'

const projectList = [
  {
    title: "Eat&Repeat Food Delivery Website",
    description: "A React-based food delivery app with menu, cart, and checkout system.",
    tech: ["React", "CSS", "JavaScript", "JSX", "MUI"],
    link: "https://eat-and-repeat-food-delivery-website.netlify.app/"
  },
  {
    title: "BlueBrick Real-Estate",
    description: "Developed a responsive front-end real estate website for Bluebrick, featuring modern UI, property listings, and smooth navigation.",
    tech: ["React", "Vite", "CSS", "JavaScript", "MUI"],
    link: "https://bluebrick-real-estate-frontend-ui.netlify.app/"
  },
 
  {
    title: "Currency Converter",
    description: "Built a real-time currency converter using API integration, enabling accurate and instant currency exchange calculations with a clean UI",
    tech: ["React", "Vite", "CSS", "JSX"],
    link: "https://currency-converter-responsive.netlify.app/"
  },
  {
    title: "Fun Project Rock Paper Scisoor",
    description: "A fun and interactive Rock-Paper-Scissors game built with HTML, CSS, and JavaScript, featuring dynamic gameplay and score tracking",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://paper-stone-scissor-working-game.netlify.app/"
  },
  {
    title: "Portfolio",
    description: "Showcasing innovative web development projects with a focus on React and modern design",
    tech: ["JSX", "CSS", "JavaScript", "React"],
    link: "https://paper-stone-scissor-working-game.netlify.app/"
  }
]

function Projects() {
  return (
    <div className="Projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
