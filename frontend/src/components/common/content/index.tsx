import { ContentContainer } from "./styles";

interface IContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: IContentProps) => {
  return <ContentContainer>{children}</ContentContainer>;
};
