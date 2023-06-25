import { NavContainer } from "./styles";

interface INavigationMenuProps {
  routes: {
    icon: string;
    name: string;
    url: string;
  }[];
}

export const NavigationMenu = ({ routes }: INavigationMenuProps) => {
  return (
    <NavContainer>
      <i className="fa fa-bars menu-icon" />
      {routes.map((route) => (
        <a key={route.name} href={route.url}>
          {" "}
          <i className={route.icon} /> {route.name}{" "}
        </a>
      ))}
    </NavContainer>
  );
};
