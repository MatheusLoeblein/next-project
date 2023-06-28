import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propsTypes = {
  children: P.node.isRequired,
};
