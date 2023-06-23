import { useEffect, useState } from "react";
import { MousePositionContainer, Position } from "./styles";

export const MousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <MousePositionContainer>
      <h3>Mouse Position</h3>
      <Position>X: {mousePosition.x}</Position>
      <Position>Y: {mousePosition.y}</Position>
    </MousePositionContainer>
  );
};
