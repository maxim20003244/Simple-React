import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const name = "Maksym Rotar";
  const profession = "Java Developer";
  const project = [
    {
      title: "Project One",
      description : "A web application using React and Spring",
      link : "£"
    },
    
    {
      title: "Project Two",
      description : "E-commerce Platform build using Django",
      link : "£"
    }
  ]

  return (
    <div className="App">
      {/* Headre */}
<header className="header">
  <h1>{name}</h1>
  <p>{profession}</p>
  <nav>
    <a href='about'>About</a>
    <a href='project'>Project</a>
    <a href='contact'>Contact</a>
    </nav>
</header>

{/* About section */}
     <section id='about' className='about-section'>
      <h2>About Me</h2>
      <p>Hello ! I am {name} , a passsionate {profession}, I love building web applicaiton that solve real worl user world</p>
     </section>

    {/*Project Section */}
    <section id='project' className='project-section'>
      <h2>Projects</h2>
      <div className='projects-list'>
    {project.map((project,index)=>(
      <div key={index} className='project-item'>
      <h3>{project.title}</h3>
      <h3>{project.description}</h3>
      <a href={project.link} target='_blank' rel='noopener' noreferrer>View Project</a>
      </div>
    
    ))}
    </div>
    </section>

    {/* Contect section*/}
     <section id='contact' className='contact-section'>
      <h2>Contact Me</h2>
      <p>If you would like to get in touch feel free to mail me at <a href='mailto:maxim@gmail.com'>maxim@gmail.com</a></p>
     </section>

     {/* footer section */}
<footer className='footer'>

  <p>2025. All Right Reserved</p>
</footer>
</div>
    );
}

export default App
