import { useState, useEffect } from 'react';
import '../styles/Animation.css'

const Animation = ({ value }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%^&*()*-+/[]{}";
  const [text, setText] = useState(value); // Initial text
  const [intervalId, setIntervalId] = useState(null);

  // Function to handle the animation (scrambling effect)
  const Animation = () => {
    let iteration = 0;

    if (intervalId) clearInterval(intervalId); // Clear any previous intervals

    const newIntervalId = setInterval(() => {
      setText((prevText) => {
        return prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return value[index]; // Restore original text one letter at a time
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");
      });

      if (iteration >= value.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(newIntervalId); // Store interval ID to clear later
  };

  // Trigger animation effect on load
  useEffect(() => {
    Animation(); // Call Animation function when the component mounts

    // Cleanup interval when component unmounts
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <h1 className='name' onMouseEnter={Animation} onLoad={Animation}>
      {text}
    </h1>
  );
};

export default Animation;
