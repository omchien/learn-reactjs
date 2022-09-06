import React from 'react';
import useClock from '../../hooks/useClock';
import useMagicColor from '../../hooks/useMagicColor';

function Clock() {
  const { timeString } = useClock();

  const color = useMagicColor();

  return <span style={{ color: color }}>{timeString}</span>;
}

export default Clock;
