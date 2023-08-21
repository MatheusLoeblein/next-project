import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render', () => {
    renderTheme(<TextComponent>Children</TextComponent>);

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render with default style', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const text = screen.getByText('Children');

    expect(text).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
