import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ links, logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} LogoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propsTypes = {
  children: P.node.isRequired,
  ...Menu.propsTypes,
  footerHtml: P.string.isRequired,
};
