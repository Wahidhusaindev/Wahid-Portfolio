import React, { useEffect } from 'react'

const RevealOnScreen = ({ children }) => {
  const ref = React.useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('visible');
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50% 0px' }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
}

export default RevealOnScreen
