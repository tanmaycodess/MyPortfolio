import React from 'react'
import NameAndIntro from '../utility/NameAndIntro'
import ProfilePhoto from '../utility/ProfilePhoto'
import SideBar from './SideBar'
import Links from '../utility/Links'
import { ContactInformation } from '../constant'
import { Mail, Phone } from 'lucide-react'

const LeftSide = () => {
  return (
    <main className="flex flex-col p-6">
    <div className="flex gap-6">
      <ProfilePhoto />
      <NameAndIntro />
    </div>
    <div>
      <SideBar/>
    </div>

    <div className='secondary-font-color text-xs mt-10'>
      <p className='flex mb-3 hover:text-green-400'><Phone className='w-4 h-4 mr-3'/> : {ContactInformation.phone}</p>
      <p className='flex hover:text-green-400'><Mail className='w-4 h-4 mr-3'/> : {ContactInformation.mail}</p>
    </div>
  
   
    <div className="mt-auto text-center">
      <Links/>
    </div>
  </main>
  )
}

export default LeftSide
