import { useClock } from "@/hooks/useClock";
import { ClockContainer } from "./styles";

export const Clock = () => {
  const clock = useClock();

  //formatted time
  const formattedTime = clock.toLocaleTimeString();

  return <ClockContainer>{formattedTime}</ClockContainer>;
};
