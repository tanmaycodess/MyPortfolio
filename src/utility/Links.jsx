import React from 'react'
import { LinksName } from '../constant'
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';

const Links = () => {
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
    <div className='bottom-0 absolute center flex gap-4'>
        {
            LinksName.map(l => (
                <button className=' tertiary-font-color hover:primary-font-color cursor-pointer px-3 py-2 rounded-2xl'>
                   <a href={l.link}>{LinksNameAndLogoMap(l.name)}</a>
                </button>
            ))
        }
    </div>
  )
}

export default Links
