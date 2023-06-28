import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor};
  `}
`;

export default function Home() {
  return <Heading>Oi</Heading>;
}
