// import React, { useState, useEffect, useRef } from 'react';

// const Odometer = ({ count }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const odometerRef = useRef(null);
//   const observerRef = useRef(null);
  
//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(entries => {
//       entries.forEach(entry => setIsVisible(entry.isIntersecting));
//     });

//     // observer.observe(odometerRef.current);
    
//     const {current: observer} = observerRef;
//     if (odometerRef.current) {
//       observer.observe(odometerRef.current);
//     }

//     return () => {
//       if (odometerRef.current) {
//         observer.unobserve(odometerRef.current);
//       }
//     };
//   }, [count]);

//   return (
//     <span ref={odometerRef} className="atf-counter-value odometer">
//       {isVisible ? count : 0}
//     </span>
//   );
// };

// export default Odometer;

import React, { useState, useEffect } from 'react';

const Odometer = ({ initialValue }) => {
  const [count, setCount] = useState(0);
  const [odometerValue, setOdometerValue] = useState('0000');
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount < initialValue) {
            return prevCount + 100;
          } else {
            setIsCounting(false); // Останавливаем счетчик, когда достигнуто initialValue
            return initialValue;
          }
        });
      }, 25); // Уменьшил интервал для более плавной анимации

      return () => clearInterval(interval);
    }
  }, [isCounting, initialValue]);

  useEffect(() => {
    const formattedCount = count.toString().padStart(4, '0');
    setOdometerValue(formattedCount);
  }, [count]);

  return <span className="odometer atf-counter-value">{odometerValue}</span>;
};

export default Odometer;