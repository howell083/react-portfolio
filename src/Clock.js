import React, { useState, useEffect } from 'react';


export default function Clock() {
    const [time, setTime] = useState();
    
    useEffect(() => {
        const oneSecond = 1000;
        const date = new Date();
        const intervalID = setInterval(() => {
            setTime(date)}, oneSecond);
        return () => {clearInterval(intervalID)};
    }, []);
  //let localTime = time.toLocaleTimeString();
  console.log(time.toLocaleTimeString())
  return <div>{time}</div>;
  
} 