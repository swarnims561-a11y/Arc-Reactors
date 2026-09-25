import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

function ExpiryTimer({ initialMinutes }) {

  const [remainingSeconds, setRemainingSeconds] = useState(
    Math.max(0, Math.floor(initialMinutes * 60))
  );

  useEffect(() => {

    const timer = setInterval(() => {

      setRemainingSeconds((previous) => {

        if (previous <= 1) {
          clearInterval(timer);
          return 0;
        }

        return previous - 1;
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  
  const hours = Math.floor(
    remainingSeconds / 3600
  );

  const minutes = Math.floor(
    (remainingSeconds % 3600) / 60
  );

  const seconds =
    remainingSeconds % 60;


  const formattedTime =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;


  let timerClass = "timer-safe";

  if (remainingSeconds === 0) {
    timerClass = "timer-expired";
  }
  else if (remainingSeconds <= 30 * 60) {
    timerClass = "timer-critical";
  }
  else if (remainingSeconds <= 60 * 60) {
    timerClass = "timer-urgent";
  }


  return (
    <div className={`expiry-timer ${timerClass}`}>

      <Clock size={16} />

      <div>

        <span>
          {remainingSeconds === 0
            ? "EXPIRED"
            : "EXPIRES IN"}
        </span>

        <strong>
          {formattedTime}
        </strong>

      </div>

    </div>
  );
}

export default ExpiryTimer;