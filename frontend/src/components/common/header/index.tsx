import { Clock } from "@/components/clock";
import "./index.css";

export const Header = () => {
  return (
    <header>
      <div className="header-content">
        <p>Header</p>
        <Clock />
      </div>
    </header>
  );
};
