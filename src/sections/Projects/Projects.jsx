import React from 'react'
import './ProjectsStyles.css';
import Hostel from '../../assets/HostelSync.jpg';
import Delixio from '../../assets/Delixio.png';
import Palette from '../../assets/Palette.png';
import ProjectCard from '../../common/ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className='container2'>
      <h1 className='sectionTitle'>Projects</h1>
      <div className='projectsContainer'>
        <ProjectCard 
          src={Hostel} 
          link='' 
          h3='HostelSync'
          p='Hostel Management'
        />
        <ProjectCard 
          src={Delixio} 
          link='https://github.com/25akanksha25/Food-Ordering-Website.git' 
          h3='Delixio'
          p='Food-Ordering'
        />
        <ProjectCard 
          src={Palette} 
          link='' 
          h3='Palette'
          p='Auction Platform'
        />
      </div>
    </section>
  )
}

export default Projects