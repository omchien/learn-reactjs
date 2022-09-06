import { useEffect, useState } from 'react';

function randomColor() {
  const COLOR_LIST = ['red', 'green', 'blue'];
  const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[randomIndex];
}

function useMagicColor() {
  const [color, setColor] = useState('black');

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor();
      setColor(newColor);
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
