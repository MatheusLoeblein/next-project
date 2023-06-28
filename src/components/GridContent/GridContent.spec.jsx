import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import { screen } from '@testing-library/react';

import mock from './mock';

describe('<GridContent />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridContent {...mock} />);

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot not background', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
