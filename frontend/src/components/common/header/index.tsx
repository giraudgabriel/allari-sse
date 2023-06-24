import { Clock } from "@/components/clock";
import { Developer } from "@/config/developer";
import { NavigationMenu } from "../navigation-menu";
import { HeaderContainer, HeaderContent } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <p>Header</p>
        <Clock />
      </HeaderContent>
      <NavigationMenu name={Developer.name} />
    </HeaderContainer>
  );
};
