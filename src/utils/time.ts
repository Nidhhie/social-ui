export const calculateTimeDifference = (createdAt: Date) => {
  const currentTime = new Date();
  const timeDifference = Math.floor(
    (currentTime.getTime() - createdAt.getTime()) / 1000
  );

  if (timeDifference < 60) {
    return `few seconds ago`;
  } else if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (timeDifference < 86400) {
    const hours = Math.floor(timeDifference / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else {
    const days = Math.floor(timeDifference / 86400);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }
};
