import { useEffect, useState } from "react";
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
      <button onClick={() => setToggleReadMore(false)} className="info">
        <i className="fas fa-arrow-up"></i> See Less
      </button>
    ) : (
      <button onClick={() => setToggleReadMore(true)} className="info">
        <i className="fas fa-arrow-down"></i> See More
      </button>
    );
  };

  useEffect(() => {
    const id = toggleReadMore ? "content" : "header-content";
    const scrollToElement = document.getElementById(id);

    if (scrollToElement) {
      scrollToElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [toggleReadMore]);

  const now = new Date();

  return (
    <MainContentContainer>
      <span>
        <h2 id="header-content">{title}</h2>
        <small>
          Publish Date: {now.toLocaleDateString()} {now.toLocaleTimeString()}{" "}
        </small>
      </span>

      <Description id="body-content">{description}</Description>
      <div id="content" hidden={!toggleReadMore}>{children}</div>
      {renderButton()}
    </MainContentContainer>
  );
};
