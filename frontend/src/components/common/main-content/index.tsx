import { Description, MainContentContainer } from "./styles";

interface IMainContentProps {
  title: string;
  description: string;
  children: React.ReactNode;
  onReadMoreClick: () => void;
}

export const MainContent = ({
  title,
  description,
  onReadMoreClick,
  children,
}: IMainContentProps) => {
  return (
    <MainContentContainer>
      <h2>{title}</h2>
      <Description>{description}</Description>

      <button onClick={onReadMoreClick}>
        <i className="fas fa-arrow-right"></i> Read More
      </button>

      {children}
    </MainContentContainer>
  );
};
