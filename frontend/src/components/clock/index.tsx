import { useClock } from "@/hooks/useClock";
import "./index.css";

export const Clock = () => {
  const clock = useClock();

  //formatted time
  const formattedTime = clock.toLocaleTimeString();

return (
    <div className="clock-container">
        {formattedTime}
    </div>
  );

};
