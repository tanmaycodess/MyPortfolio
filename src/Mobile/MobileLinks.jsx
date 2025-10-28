import React from 'react'
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { LinksName } from '../constant';





const MobileLinks = () => {
    const LinksNameAndLogoMap = (key) => {
        switch (key) {
         case 'Instagram':
             return <Instagram/>
             break;

         case 'LinkedIn' :
             return <Linkedin/>
             break;
         case 'Github' :
             return <Github/>
             break;

         default:
             break;
        }
    }

  return (
    <div className=' flex gap-4'>
        {
            LinksName.map(l => (
                <button className=' tertiary-font-color hover:primary-font-color cursor-pointer px-2 py-1 rounded-2xl'>
                   {LinksNameAndLogoMap(l.name)}
                </button>
            ))
        }
    </div>
  )
}

export default MobileLinks
