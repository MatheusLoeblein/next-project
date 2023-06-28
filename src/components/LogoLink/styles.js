import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    text-decoration: none;
    align-items: center;
    color: inherit;

    > img {
      max-height: 3rem;
    }
  `}
`;
