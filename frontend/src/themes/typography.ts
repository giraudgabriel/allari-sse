import styled from 'styled-components';

export interface TypoProps {
  type?: 'bold';
  size?: '300' | '200' | '100';
  transform?: string;
  color?: string;
}

export const HeadingText = styled.h1<TypoProps>`
  font-weight: ${(props) => (props.type === 'bold' ? 'bold' : '500')};
  font-size: ${(props) =>
    props.size === '300'
      ? '2rem'
      : props.size === '200'
      ? '1.5rem'
      : '1.125rem'};
  color: ${(props) => props.color || props.theme.colors.white};
  text-transform: ${(props) => props.transform || 'none'};
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const RegularText = styled.p<TypoProps>`
  font-weight: ${(props) => (props.type === 'bold' ? '700' : '500')};

  font-size: ${(props) =>
    props.size === '300'
      ? '1rem'
      : props.size === '200'
      ? '0.875rem'
      : props.size === '100'
      ? '0.75rem'
      : '0.625rem'};
  color: ${(props) => props.color || props.theme.colors.white};
  text-transform: ${(props) => props.transform || 'none'};
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;