import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumn } from '.';
import { screen } from '@testing-library/react';

import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('should render with two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);

    expect(container).toMatchSnapshot();
  });
  it('should render with two column grid not background', () => {
    const { container } = renderTheme(
      <GridTwoColumn {...mock} background={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
