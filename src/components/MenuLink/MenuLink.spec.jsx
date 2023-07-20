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
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.75rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <div>
        <a
          class="c0"
          href="https://www.google.com"
          target="_blank"
        >
          Children
        </a>
      </div>
    `);
  });
});
