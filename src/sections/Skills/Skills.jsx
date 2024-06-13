import React from 'react';
import './SkillsStyles.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillsCard from '../../common/SkillsCard';

function Skills() {
  return (
    <section id='skills' className='container3'>
      <h1 className='sectionTitle'>Skills</h1>
      <div className='skillList'>
        <SkillsCard src={checkMarkIcon} skill={'HTML'}/>
        <SkillsCard src={checkMarkIcon} skill={'CSS'}/>
        <SkillsCard src={checkMarkIcon} skill={'JavaScript'}/>
        <SkillsCard src={checkMarkIcon} skill={'React.js'}/>
        <SkillsCard src={checkMarkIcon} skill={'Mongo DB'}/>
      </div>
      <hr/>
      <div className='skillList'>
        <SkillsCard src={checkMarkIcon} skill={'C'}/>
        <SkillsCard src={checkMarkIcon} skill={'C++'}/>
        <SkillsCard src={checkMarkIcon} skill={'Python'}/>
        <SkillsCard src={checkMarkIcon} skill={'Java'}/>
        <SkillsCard src={checkMarkIcon} skill={'MySQL'}/>
      </div>
      <hr/>
    </section>
  );
}

export default Skills