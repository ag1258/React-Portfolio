import React from 'react'
import './ProjectsStyles.css';
import Viberr from '../../assets/viberr.png';
import frshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/Clipboard with Checklist Clipart Vector Illustration for Web Icon.png';
import ProjectCard from '../../common/ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className='container2'>
      <h1 className='sectionTitle'>Projects</h1>
      <div className='projectsContainer'>
        <ProjectCard 
          src={Viberr} 
          link='https://github.com/ag1258/quiz-game.git' 
          h3='Step UP'
          p='Quiz Game'
        />
        <ProjectCard 
          src={frshBurger} 
          link='https://github.com/25akanksha25/Food-Ordering-Website.git' 
          h3='Delixio'
          p='Food-Ordering'
        />
        <ProjectCard 
          src={hipsster} 
          link='https://github.com/ag1258/To-do-List.git' 
          h3='TODOY'
          p='To-do List'
        />
      </div>
    </section>
  )
}

export default Projects