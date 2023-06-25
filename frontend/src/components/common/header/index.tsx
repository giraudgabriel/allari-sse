import { Clock } from "@/components/clock";
import { Developer } from "@/config/developer";
import { NavigationMenu } from "../navigation-menu";
import { HeaderContainer, HeaderContent } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>Allari Images</h2>
        <Clock />
      </HeaderContent>
      <NavigationMenu routes={[{
        name: Developer.name,
        url: Developer.url,
        icon: "fa fa-user"
      }]} />
    </HeaderContainer>
  );
};
