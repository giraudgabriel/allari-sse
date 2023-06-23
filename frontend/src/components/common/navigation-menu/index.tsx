import "./index.css";

interface INavigationMenuProps {
  name: string;
}

export const NavigationMenu = ({ name }: INavigationMenuProps) => {
  return <nav>{name}</nav>;
};
