import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title={'Error 404'}
      html='<p>A pagina que vc busca não foi encontrada, <a href="/">Clique para voltar</a></p>'
    />
  );
};
