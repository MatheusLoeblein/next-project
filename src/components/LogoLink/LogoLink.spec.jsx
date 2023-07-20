import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';
import { screen } from '@testing-library/react';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá Mundo" />);

    expect(
      screen.getByRole('heading', { name: 'Olá Mundo' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Olá Mundo' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg" />,
    );

    expect(screen.getByAltText('Olá Mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg" />,
    );

    expect(container).toMatchInlineSnapshot(`
      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: inherit;
      }

      .c1 > img {
        max-height: 3rem;
      }

      .c0 {
        color: #0A1128;
        font-size: 2.4rem;
        text-transform: uppercase;
      }

      <div>
        <h1
          class="c0"
        >
          <a
            class="c1"
            href="#target"
          >
            <img
              alt="Olá Mundo"
              src="image.jpg"
            />
          </a>
        </h1>
      </div>
    `);
  });
});
