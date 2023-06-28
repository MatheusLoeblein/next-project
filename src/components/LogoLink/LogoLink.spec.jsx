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
      <div>
        <h1
          class="styles__Title-sc-1b7ft9h-0 gcibAI"
        >
          <a
            class="styles__Container-cyfc23-0 fSsAzx"
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
