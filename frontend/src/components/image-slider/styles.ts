import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 8rem;
  max-width: 100%;
`;

export const SliderImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 10rem;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }  
`;

export const ArrowsContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


interface ISliderButton {
  active?: boolean;
  background?: string;
}

export const SliderButton = styled.button<ISliderButton>`
  transition: 0.2s;
  background-color: ${({ background }) => background ? background : "rgba(0, 0, 0, 0.2)"} ;
  margin: 0.2rem;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.7rem;
  padding: 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  ${({ active }) => active && `background-color: rgba(0, 0, 0, 0.5);`}
  `;

export const SliderFooter = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem;

    button {
      width: 1rem;
      height: 1rem;
    }
  `