import P from 'prop-types';
import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Styled.Container href="#" area-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
