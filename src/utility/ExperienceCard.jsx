import React from 'react'
import { ArrowUpRight } from 'lucide-react';


const SkillCard = ({ skills , id}) => {
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {skills?.map((s, index) => (
          <span 
            key={index} 
            className={`text-xs bg-blue-500/10 ${id === 'experience' ? 'text-green-400' : 'text-purple-400'}  px-2 py-1 rounded-2xl`}
          >
            {s}
          </span>
        ))}
      </div>
    );
  };
  
const ExperienceCard = ({JobExperience , id}) => {

  return (
    <div id={id} className=''>
      {JobExperience.map(je => (
       <div className='flex gap-4 items-start hover:bg-blue-50/10 px-5 py-4 rounded-xl'>
       <div className='w-28 shrink-0'>
         <p className='secondary-font-color text-xs whitespace-nowrap'>
           {je.duration || je.year} 
         </p>
       </div>
       <div>
         <p className='flex primary-font-color'>
           {je.designation || je.name} {id === 'experience' && '@'}  {  je.companyName } 
           {je.link && <a href={je.link} className=' ml-1 underline'><ArrowUpRight className='w-5 h-5'/></a>}
         </p>
         <p className='secondary-font-color mt-2 text-sm'>{je.description}</p>
         <SkillCard skills={je.skills || je.stack } id={id}/>
       </div>
     </div>
     
      )) }
    </div>
  )
}

export default ExperienceCard
