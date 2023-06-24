import { useState } from "react";
import { Description, MainContentContainer } from "./styles";

interface IMainContentProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const MainContent = ({
  title,
  description,
  children,
}: IMainContentProps) => {
  const [toggleReadMore, setToggleReadMore] = useState<boolean>(false);

  const renderButton = () => {
    return toggleReadMore ? (
      <button onClick={() => setToggleReadMore(false)}>
        <i className="fas fa-arrow-left"></i> Read Less
      </button>
    ) : (
      <button onClick={() => setToggleReadMore(true)}>
        <i className="fas fa-arrow-right"></i> Read More
      </button>
    );
  };

  return (
    <MainContentContainer>
      <h2>{title}</h2>
      <Description>{description}</Description>
      {renderButton()}
      {toggleReadMore && children}
    </MainContentContainer>
  );
};
