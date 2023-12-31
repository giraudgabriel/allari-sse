import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  user-select: none;
  font-family: Roboto, sans-serif;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  animation: fadein 0.3s ease-in-out;
}

body {
  background-color: #f5f5f5;
  color: #333;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


button {
  cursor: pointer;
  outline: none;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  position: relative;
  width: fit-content;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  animation: fadein 0.5s;

  
}

.info {
  background-color: #2196f3;
  color: #fff;

  &:hover {
    background-color: #1976d2;
  }

  &:disabled {
    background-color: #9e9e9e;
  }
}

button:disabled {
  cursor: not-allowed;
}

button:focus {
  outline: none;
}

button:hover {
  filter: brightness(0.9);
  transition: 0.2s;
}


button:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.5s, opacity 1s;
}

button:active:after {
  transform: scale(0, 0);
  opacity: 0.2;
  transition: 0s;
}

main {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: auto;
  min-height: 40rem;
  animation: fadein 0.5s;
}

@media (max-width: 768px) {
  main {
    flex-direction: column;
  }
}
`;
