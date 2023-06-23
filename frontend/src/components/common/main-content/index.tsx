interface IMainContentProps {
  description: string;
  children: React.ReactNode;
  onReadMoreClick: () => void;
}

export const MainContent = ({
  description,
  onReadMoreClick,
  children,
}: IMainContentProps) => {
  return (
    <section>
      <h2>Description</h2>
      <p>{description}</p>

      <button onClick={onReadMoreClick} className="ripple">
        <i className="fas fa-arrow-right"></i> Read More
      </button>

      {children}
    </section>
  );
};
