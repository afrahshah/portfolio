import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();

  useEffect(() => {
    gsap.to(bgRef.current, {
      duration: 1,
      opacity: 1,
    });
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      {/* Logo image and SVG have been removed */}
    </div>
  );
};

export default Logo;
