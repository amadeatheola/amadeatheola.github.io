import React, { useState, useEffect } from 'react';

// 1. Group your messages cleanly by hour boundaries
const getTimeofDay = (hour: number): string => {
  if (hour >= 6 && hour < 8) {
    return "./public/images/temporal/dawn.jpeg";
  } else if (hour >= 8 && hour < 12) {
    return "./public/images/temporal/morning.jpeg";
  } else if (hour >= 12 && hour < 15) {
    return "./public/images/temporal/noon.jpeg";
  } else if (hour >= 15 && hour < 17) {
    return "./public/images/temporal/afternoon.jpeg";
  } else if (hour >= 17 && hour < 18) {
    return "./public/images/temporal/dusk.jpeg";
  } else if (hour >= 18 && hour < 21) {
    return "./public/images/temporal/evening.jpeg";
  } else if (hour >= 21 && hour < 24) {
    return "./public/images/temporal/night.jpeg";
  } else {
    return "./public/images/temporal/midnight.jpeg";
  }
};

export function HourlyImage() {
  const [imageSrc, setImageSrc] = useState(() => getTimeofDay(new Date().getHours()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentHour = new Date().getHours();
      setImageSrc(getTimeofDay(currentHour));
    }, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <img 
        src={imageSrc} 
        alt="Time-based theme" 
        style={{ width: '100%', maxWidth: '400px', borderRadius: '12px', transition: 'all 0.5s ease' }} 
      />
    </div>
  );
}


export default function LiveClock() {
  // 1. Initialize state with the current time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 2. Manage the side effect (the timer)
  useEffect(() => {
    // Setup the interval to run every 1000ms (1 second)
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // 3. IMPORTANT: Return a cleanup function
    // This clears the timer if the component unmounts from the DOM
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div>
      <h3>Current Time:</h3>
      <p>{time}</p>
    </div>
  );
}

