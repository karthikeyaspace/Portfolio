import React, { useEffect, useState } from 'react';
import LogoB from '../assets/logo.svg'
import LogoW from '../assets/logo-white.svg'

export default function VisibilityIcon() {
  const [logo, setLogo] = useState(LogoB);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setLogo(LogoW);
      } else {
        setLogo(LogoB);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

  }, []);

  useEffect(() => {
    document.querySelector('link[rel="icon"]').href = logo;
  }, [logo]);

  return null;
}
