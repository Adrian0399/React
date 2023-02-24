import { useState, useEffect } from "react";

export const useTimer = (minuto = 1, segundo = 0) => {
  const [mins, setMinutes] = useState(minuto);
  const [secs, setSeconds] = useState(segundo);
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval);
        } else {
          setMinutes(mins - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  if (mins == 0 && secs == 0) {
    setshowModal(true);
  }

  return {
    showModal,
    mins,
    secs,
  };
};
