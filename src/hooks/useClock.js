import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

function useClock() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = dayjs().format('HH:mm:ss');
      setTimeString(now);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
