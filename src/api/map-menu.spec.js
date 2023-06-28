import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match ', () => {
    const menu = mapMenu({
      id: 1,
      logo_link: '#home',
      logo_text: 'Logo',
      logo: {
        data: {
          id: 5,
          attributes: {
            url: 'a.svg',
          },
        },
      },
      menu_links: [
        {
          id: 2,
          link_text: 'intro',
          url: '#intro',
          open_in_new_tab: false,
        },
        {
          id: 1,
          link_text: 'grid-one',
          url: '#grid-one',
          open_in_new_tab: false,
        },
      ],
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Logo');
    expect(menu.link).toBe('#home');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.newTab).toBe(false);
    expect(menu.links[0].children).toBe('intro');
    expect(menu.links[0].link).toBe('#intro');
  });

  it('should map menu links', () => {
    const Links = mapMenuLinks();
    expect(Links).toEqual([]);
  });

  it('should map menu links', () => {
    const Links = mapMenuLinks([
      {
        id: 2,
        link_text: 'intro',
        url: '#intro',
        open_in_new_tab: false,
      },
      {},
    ]);

    expect(Links[0].newTab).toBe(false);
    expect(Links[0].children).toBe('intro');
    expect(Links[0].link).toBe('#intro');
  });
});
