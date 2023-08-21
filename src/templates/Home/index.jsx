import { Base } from '../Base';
import Head from 'next/head';
import { PageNotFound } from '../PageNotFound';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import P from 'prop-types';
import config from '../../config';

function Home({ data }) {
  if (!data) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <>
      <Head>
        <title>
          {data.title} | {config.title}
        </title>
      </Head>
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
    </>
  );
}

export default Home;

Home.propTypes = {
  data: P.object,
};
