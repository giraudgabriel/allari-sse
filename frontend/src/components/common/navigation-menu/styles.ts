import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  padding: 1rem;
  width: 100%;

  .menu-icon {
    visibility: hidden;
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    .menu-icon {
      visibility: visible;
    }
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;