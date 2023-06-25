import styled from "styled-components";

export const MousePositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content:flex-start;
  align-items: center;
  overflow: auto;
  padding: 8px;  
`;

export const Position = styled.p`
  font-weight: 600;
  margin: 8px 0;
  padding: 8px;
  background-color: #f2f2f2;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  text-align: center;
  animation: fadein 0.5s ease-in-out;
`;