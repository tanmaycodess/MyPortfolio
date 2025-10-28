import React, { useEffect, useState } from 'react';
import { JobExperience, ProjectsDone, SideBarSection } from '../constant';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (id, index) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveIndex(index);
    }
  };

 // Sidebar.jsx
useEffect(() => {
  const rootEl = document.getElementById('content');
  // If the content area isn't scrollable (mobile), use the window as the root
  const useWindow = !rootEl || rootEl.scrollHeight <= rootEl.clientHeight;
  const root = useWindow ? null : rootEl;

  const sections = SideBarSection
    .map(s => document.getElementById(s.id))
    .filter(Boolean);

  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = SideBarSection.findIndex(s => s.id === entry.target.id);
          if (idx !== -1) setActiveIndex(idx);
        }
      });
    },
    {
      root,
      rootMargin: useWindow ? '0px 0px -60% 0px' : '0px 0px -60% 0px',
      threshold: 0
    }
  );

  sections.forEach(sec => observer.observe(sec));
  return () => observer.disconnect();
}, []);


  return (
    <div className="flex mt-12 mx-auto flex-col gap-4 p-4">
    {SideBarSection.map((item, index) => (
      <button
        key={index}
        onClick={() => handleScroll(item.id, index)}
        className={`relative flex items-center gap-3 text-left text-sm transition-all 
          ${index === activeIndex 
            ? 'primary-font-color font-semibold' 
            : 'tertiary-font-color hover:text-green-400'
          }`}
      >
        {/* The line */}
        <span
          className={`h-[2px] rounded-full transition-all duration-500 ${
            index === activeIndex ? 'w-28 bg-green-400' : 'w-22 bg-gray-600/40'
          }`}
        ></span>
  
        {/* The label */}
        
        {
        item.name === 'Experience' ? 
          `${item.name} (${JobExperience.length})` 
          : item.name === 'Projects' ? 
            `${item.name} (${(ProjectsDone.length)})` 
          : item.name
        }
      </button>
    ))}
  </div>
  
  );
};

export default Sidebar;
