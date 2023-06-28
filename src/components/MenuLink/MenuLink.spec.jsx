import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';
import { screen } from '@testing-library/react';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://www.google.com">Children</MenuLink>);

    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'href',
      'https://www.google.com',
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://www.google.com" newTab={true}>
        Children
      </MenuLink>,
    );

    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://www.google.com" newTab={true}>
        Children
      </MenuLink>,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          class="styles__Container-sc-1ehi4pt-0 hbmwJJ"
          href="https://www.google.com"
          target="_blank"
        >
          Children
        </a>
      </div>
    `);
  });
});
