import { useEffect, useState } from "react";
import { calculateTimeDifference } from "../../utils/time";

const ReadableTime = ({ timestamp }: { timestamp: Date }) => {
  const [time, setTime] = useState("");

  const updateTime = () => {
    const time = calculateTimeDifference(timestamp);
    setTime(time);
  };

  useEffect(() => {
    setTimeout(() => {
      updateTime();
    }, 1000 * 60);
    updateTime();
  }, []);
  return <div className="text-sm">{time}</div>;
};

export default ReadableTime;
