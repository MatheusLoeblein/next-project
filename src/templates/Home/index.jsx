import { Base } from '../Base';
import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { useLocation } from 'react-router-dom';

import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : config.defaultSlug;

    const load = async () => {
      try {
        const data = await fetch(`${config.url}${slug}&populate=deep`);
        const json = await data.json();
        const pageData = mapData([json.data[0].attributes]);
        setData(() => pageData[0]);
      } catch (e) {
        console.log(e);
        setData(undefined);
      }
    };

    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = 'Pagina não encontrada';
    }

    if (data && !data.slug) {
      document.title = 'Carregando...';
    }

    if (data && data.title) {
      document.title = data.title;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;

        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
