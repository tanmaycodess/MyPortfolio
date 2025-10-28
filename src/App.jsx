import React from 'react'
import LeftSide from './Components/LeftSide'
import RightSide from './Components/RightSide'
import CursorEffect from './utility/CursorEffect'
import { useDeviceType } from './hooks/useDeviceType'
import NameSection from './Mobile/NameSection'
import Links from './utility/Links'
import MobileLinks from './Mobile/MobileLinks'
import MobileAbout from './Mobile/MobileAbout'
import ExperienceCard from './utility/ExperienceCard'
import { JobExperience, ProjectsDone } from './constant'
import MobileExperienceCard from './Mobile/MobileExperienceCard'
import MobileFooter from './Mobile/MobileFooter'

const App = () => {
  const device = useDeviceType();
  return (
   <>
    {
      device === 'laptop' ? (
        <main className="background min-h-screen allignment">
          <CursorEffect/>
          <div className="grid grid-cols-2 mx-auto h-screen">
            
            {/* LEFT SIDE - Fixed */}
            <div className="sticky ml-20 top-0 max-h-[600px] overflow-hidden">
              <LeftSide />
            </div>

            {/* RIGHT SIDE - Scrollable */}
            <div id='content' className="h-screen overflow-y-auto">
              <RightSide />
            </div>

          </div>
        </main>
      ) : (
        <main className="background min-h-screen px-6 py-10">
          <NameSection/>
          <div className='mt-6'>
            <MobileLinks/>
          </div>
          <div className='mt-10'>
            <p className='secondary-font-color text-xl font-bold mb-8'>About</p>
            <MobileAbout/>
          </div>
          <div className='mt-10'>
            <p className='secondary-font-color text-xl font-bold mb-8'>Experience</p>
            <MobileExperienceCard JobExperience={JobExperience} id={'experience'}/>
          </div>

          <div className='mt-10'>
            <p className='secondary-font-color text-xl font-bold mb-8'>Projects</p>
            <MobileExperienceCard JobExperience={ProjectsDone} id={'projects'}/>
          </div>

          <MobileFooter/>
        </main>
      )
    }
   </>
    
  )
}

export default App
