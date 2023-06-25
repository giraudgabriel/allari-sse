import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #ddd;
  padding: 1rem 0;
  text-align: center;
  color: #777;
  border-top: 1px solid #e5e5e5;
  position: sticky;
  bottom: 0;
  width: 100%;

  a {
    color: #777;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  `;