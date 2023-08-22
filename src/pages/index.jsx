import styled, { css } from 'styled-components';
import P from 'prop-types';
import config from '../config';
import { mapData } from '../api/map-data';
import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';

export default function Index({ data = null }) {
  return <Home data={data}></Home>;
}

export const getStaticProps = async () => {
  // const raw = await fetch(`${config.url}${config.defaultSlug}&populate=deep`);
  // const json = await raw.json();
  // const data = mapData([json.data[0].attributes])[0];

  let data = null;

  try {
    data = await loadPages('olha-so-que-legal-minha-pagina');
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
