import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/ru";

import { ITime } from "../intefaces";

export const Time: React.FC = () => {
  const [currentTime, setCurrentTimeTime] = useState<ITime>({
    time: moment().format("LTS"),
  });

  useEffect(() => {
    setTimeout(() => {
      setCurrentTimeTime({ time: moment().format("LTS") });
    }, 1000);
  }, [currentTime]);

  return (
    <>
      <div className="time">Moscow time: {currentTime.time}</div>
    </>
  );
};
