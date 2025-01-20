import React, { useEffect, useState } from 'react';
import Header from './Header/Header';      
import MobileHeader from './Header/Header-mob'; 

const ResponsiveHeader = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

  
    handleResize();

    
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
    </>
  );
};

export default ResponsiveHeader;
