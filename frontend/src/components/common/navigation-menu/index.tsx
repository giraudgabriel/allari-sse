import { NavContainer } from "./styles";

interface INavigationMenuProps {
  name: string;
}

export const NavigationMenu = ({ name }: INavigationMenuProps) => {
  return <NavContainer>{name}</NavContainer>;
};
