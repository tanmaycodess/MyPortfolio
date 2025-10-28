import React from 'react'
import ExperienceCard from '../utility/ExperienceCard'
import About from '../utility/About'
import { JobExperience, ProjectsDone } from '../constant'
import Footer from './Footer'

const RightSide = () => {
  return (
    <div className='center flex flex-col p-6'>
      <div className='mb-8'>
        <About/>
      </div>
      <div className='mt-20 mb-8'>
        <ExperienceCard JobExperience={JobExperience} id={'experience'}/>
      </div>
      <div className='mt-20'>
      <ExperienceCard JobExperience={ProjectsDone} id={'projects'}/>
      </div>
      <Footer/>
    </div>
  )
}

export default RightSide
