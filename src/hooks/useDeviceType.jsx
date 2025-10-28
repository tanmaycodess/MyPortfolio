import { useEffect, useState } from 'react';

export function useDeviceType() {
  const compute = () => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const noHover = window.matchMedia('(hover: none)').matches;
    if (coarse && noHover) return 'mobile';
    return window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'laptop';
  };

  const [type, setType] = useState(compute);

  useEffect(() => {
    const mqs = [
      window.matchMedia('(pointer: coarse)'),
      window.matchMedia('(hover: none)'),
      window.matchMedia('(max-width: 767px)'),
    ];
    const onChange = () => setType(compute());
    mqs.forEach(mq => mq.addEventListener('change', onChange));
    return () => mqs.forEach(mq => mq.removeEventListener('change', onChange));
  }, []);

  return type; 
}
