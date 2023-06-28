import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';
import { screen } from '@testing-library/react';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Olá</h1>'} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="styles__Container-sc-1vivc8z-0 iiuhnn"
        >
          <div
            class="styles__Container-sc-1abwwhx-0 kXNRnk"
          >
            <div
              class="styles__Container-sc-1ba2h2-0 cPpcCF"
            >
              <h1>
                Olá
              </h1>
            </div>
          </div>
        </div>
      </div>
    `);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
