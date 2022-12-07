import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [dateNow, setDate] = useState(getTime());
  useEffect(() => {
    setInterval(() => {
      setDate(getTime());
    }, 1000);
  }, []);
  function getTime() {
    const date = new Date(),
      hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
      minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
      seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return { hours, minutes, seconds };
  }

  return (
    <div>
      <p>{dateNow.hours + ':' + dateNow.minutes + ':' + dateNow.seconds}</p>
    </div>
  );
};

export default CurrentTime;
