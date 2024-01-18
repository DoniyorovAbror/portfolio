import React, { useState, useEffect, useRef } from 'react';

const Odometer = ({ count }) => {
  const [isVisible, setIsVisible] = useState(false);
  const odometerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    observer.observe(odometerRef.current);

    return () => {
      if (odometerRef.current) {
        observer.unobserve(odometerRef.current);
      }
    };
  }, []);

  return (
    <span ref={odometerRef} className="atf-counter-value odometer">
      {isVisible ? count : 0}
    </span>
  );
};

export default Odometer;