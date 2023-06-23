import styled from "styled-components";

export const MainContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1rem;
  & > * {
    margin: 1rem 0;
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


