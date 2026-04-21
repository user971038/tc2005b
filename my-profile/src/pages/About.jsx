import { Link } from 'react-router'
import Navbar from '../components/Navbar.jsx'
import './Pages.css'

const About = () => {
  return (
    <div className="body">
      <Navbar />
      <h1 style={{ color: '#ff00e5' }}>About <span style={{ color: 'white' }}>Me</span></h1>
      <div className="content-container" id="container-about">
        <div className="content-about" id="about-left">
          <img style={{ height: '500px' }} src="https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="lit me" />
          <h3>A picture of a cat (2022).</h3>
        </div>
        <div className="content-about" id="about-right">
          <h3 style={{ color: '#00f0ff' }}>Who am I?</h3>
          <p>I'm a computer science student driven by a mix of curiosity and a love for 
            problem-solving. My journey in tech is defined by a desire to understand how 
            complex systems work and an even greater passion for building tools that make 
            life a little easier. Whether I’m diving into the logic of a new backend 
            framework or fine-tuning the details of a user interface, I enjoy the 
            challenge of turning abstract ideas into functional, clean code. Outside of my 
            coursework, I’m constantly looking to broaden my perspective by exploring 
            emerging technologies and collaborating on projects that push me to think 
            outside the box. I'm excited to continue growing as a developer and to 
            contribute to meaningful solutions in an ever-evolving digital landscape.</p>
          <h3 style={{ color: '#00f0ff' }}>My abilities</h3>
          <p>Languages: Python, C#/C++, JavaScript.</p>
          <p>Web Development: HTML5/CSS3, React, Node.js.</p>
          <p>Data & Databases: PostgreSQL, Firebase; Data Structures and Algorithms.</p>
          <p>Tools & Platforms: Git/GitHub, Linux/Unix Command Line, VS Code.</p>
        </div>
      </div>
    </div>
  )
}

export default About