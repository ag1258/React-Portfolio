import React from 'react';
import './Herostyles.css';
import ProfileImg from '../../assets/download.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume.pdf';
import { useTheme } from '../../common/ThemeContent.jsx';


const Hero = () => {

  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  
  return (
    <section id='hero' className='container'>
        <div className='colorModeContainer'>
            <img className='hero' src={ProfileImg} alt='Profile picture'/>
            <img className='colormode' src={themeIcon} alt='Color mode icon' onClick={toggleTheme}/>
        </div>
        <div className='info'>
            <h1>Ananya<br/>Gupta</h1>
            <h2>Full-Stack Developer</h2>
            <span>
              <a href='https://github.com' target='_blank'>
                <img src={githubIcon} alt='Github icon'/>
              </a>
              <a href='https://Linkedin.com' target='_blank'>
                <img src={linkedinIcon} alt='Linkedin icon'/>
              </a>
            </span>
            <p className='description'>
              With a passion for learning new and developing modern time apps.
            </p>
            <a href={CV} download>
              <button className='resume-btn'>Resume</button>
            </a>
        </div>
    </section>
  );
}

export default Hero;