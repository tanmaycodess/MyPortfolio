import React from 'react'

const About = () => {
  return (
    <section 
      id='about' 
      className="max-w-3xl mx-auto p-6 r"
    >
    
      <p className="tertiary-font-color leading-relaxed text-sm sm:text-base space-y-4">

        <span className="block mb-4">
          Skilled in building and deploying real-world client projects, with a focus on delivering innovative solutions for the education industry.
        </span>
        <span className="block mb-4">
          I’m a developer passionate about crafting <span className="text-green-400 font-medium">accessible</span>, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for <span className="text-green-400 font-medium">performance and usability</span>.
        </span>

        <span className="block mb-4">
          Currently, I'm a <span className="text-green-400 font-medium">Senior Front-End Engineer at Klaviyo</span>, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
        </span>

        <span className="block mb-4">
          In the past, I've had the opportunity to develop software across a variety of settings — from <span className="text-green-400 font-medium">advertising agencies</span> and large corporations to <span className="text-green-400 font-medium">startups</span> and small digital studios. I also released a comprehensive video course guiding learners through building a web app with the Spotify API.
        </span>

        <span className="block">
          When I’m not coding, you’ll find me climbing, playing tennis, hanging out with my wife and two cats, or exploring <span className="italic text-green-400">Hyrule</span> in search of Korok seeds 🌿.
        </span>
      </p>
    </section>
  )
}

export default About
