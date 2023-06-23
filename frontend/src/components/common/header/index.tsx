import { Clock } from "@/components/clock";
import "./index.css";
import { Developer } from "@/config/developer";
import { NavigationMenu } from "../navigation-menu";

export const Header = () => {
  return (
    <header>
      <div className="header-content">
        <p>Header</p>
        <Clock />
      </div>
      <NavigationMenu name={Developer.name} />
    </header>
  );
};
