import { styled } from 'styled-components';

export const ContentContainer = styled.aside`
  width: 100%;
  min-width: 10rem;
  max-width: 12rem;
  height: 100%;
  min-height: 35rem;
  box-sizing: border-box;
  margin: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    min-height:fit-content;
    width: 100%;
    max-width: 100%;
    height: fit-content;
  }
  `;