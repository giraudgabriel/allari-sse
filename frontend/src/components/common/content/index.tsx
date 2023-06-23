import "./index.css";

interface IContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: IContentProps) => {
  return <aside>{children}</aside>;
};
