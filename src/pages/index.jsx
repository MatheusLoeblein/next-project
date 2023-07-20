import styled, { css } from 'styled-components';
import P from 'prop-types';
import config from '../config';
import { mapData } from '../api/map-data';
import Home from '../templates/Home';

export default function Index({ data = null }) {
  console.log(data);
  return <Home data={data}></Home>;
}

export const getStaticProps = async () => {
  const raw = await fetch(`${config.url}${config.defaultSlug}&populate=deep`);
  const json = await raw.json();

  const data = mapData([json.data[0].attributes])[0];

  return {
    props: {
      data,
    },
  };
};

Index.prototype = {
  name: P.object,
};
