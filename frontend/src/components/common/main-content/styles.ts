import styled from "styled-components";

export const MainContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin: 0.5rem 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  & > * {
    margin: 0.5rem 0;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  padding: 0;
  text-align: justify;
  white-space: pre-wrap;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  
  object-fit: contain;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);

  .image-content {
    display: none;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
    max-height: 15rem;
    object-fit: cover;
    object-position: center;
    text-align: center;
    margin: 8px 0;
    border-radius: 4px;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;

    .image-content {
      display: block;
      transition: display 0.2s;
    }

    img {
      display: none !important;
      transition: display 0.5s;
    }
  }

  &:hover img {
    display: block;
    transition: display 0.5s;
  }

  &:hover h1 {
    display: block;
    transition: display 0.5s;
  }
`;


