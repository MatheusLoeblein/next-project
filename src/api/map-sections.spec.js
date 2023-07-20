import {
  mapSectionTwoColums,
  mapSections,
  mapSectionContent,
  mapTextGrid,
  mapImageGrid,
} from './map-sections';

import { data } from './dados.json';

describe('map-sections', () => {
  it('should render section with correct data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render predefined section if no data', () => {
    const { attributes } = data[1];
    const sections = mapSections(attributes.sections);
    expect(sections[0].component).toBe('section.section-two-columns');
  });

  it('should with invalid data', () => {
    const withNoTextOrImage = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    const withNoComponent = mapSections([{}]);

    expect(withNoTextOrImage).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);

    expect(withNoComponent).toEqual([{}]);
  });

  it('should test section grid no text or images', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
    ]);

    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map values section two colums no data ', () => {
    const data = mapSectionTwoColums();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map values section two colums ', () => {
    const data = mapSectionTwoColums({
      __component: 'section.section-two-columns',
      title: 'JANUARY BRINGS US FIREFOX 85',
      description:
        'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.\n\n',
      image: {
        data: {
          id: 4,
          attributes: {
            url: 'https://res.cloudinary.com/deosirvhi/image/upload/v1651926290/javascript_8c37407653.svg',
          },
        },
      },
      metadata: {
        section_id: 'home',
        background: true,
      },
    });
    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
    expect(data.text).toBe(
      'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.\n\n',
    );
    expect(data.srcImg).toBe(
      'https://res.cloudinary.com/deosirvhi/image/upload/v1651926290/javascript_8c37407653.svg',
    );
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('home');
  });

  it('should map section content', () => {
    const data = mapSectionContent();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section content', () => {
    const data = mapSectionContent({
      id: 1,
      __component: 'section.section-content',
      title: 'NEWS COVERAGE AND SOME SURPRISES',
      content:
        'The release of **Apple Silicon-based** Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s _performance_. This post details some background information on the <u>experience</u> of porting Firefox to run natively on these CPUs.\n\nWe’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.\n\nWe’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.\n\n',
      metadata: {
        id: 3,
        name: 'intro',
        section_id: 'intro',
        background: false,
      },
    });
    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('NEWS COVERAGE AND SOME SURPRISES');
    expect(data.html).toBe(
      'The release of **Apple Silicon-based** Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s _performance_. This post details some background information on the <u>experience</u> of porting Firefox to run natively on these CPUs.\n\nWe’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.\n\nWe’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.\n\n',
    );
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('intro');
  });

  it('should map grid text', () => {
    const data = mapTextGrid({
      id: 1,
      __component: 'section.section-grid',
      title: 'MY GRID',
      description: 'Uma breve descrição.\n\n',
      text_grid: [
        {
          id: 1,
          title: 'Teste 1',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
        {
          id: 2,
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
        {
          id: 3,
          title: 'Teste 3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
      ],
      image_grid: [],
      metadata: {
        id: 2,
        name: 'grid-one',
        section_id: 'grid-one',
        background: true,
      },
    });
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('MY GRID');
    expect(data.description).toBe('Uma breve descrição.\n\n');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
    );
  });
  it('should map grid text sent unifined data', () => {
    const data = mapTextGrid(undefined);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      title: 'MY GRID',
      description: 'Uma breve descrição.',
      metadata: {
        section_id: 'grid-one',
        background: true,
      },
      text_grid: [],
      image_grid: [
        {
          image: {
            data: [
              {
                attributes: {
                  url: 'image.svg',
                },
              },
              {
                attributes: {
                  url: 'image2.jpg',
                },
              },
            ],
          },
        },
      ],
    });
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('MY GRID');
    expect(data.description).toBe('Uma breve descrição.');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].srcImg).toBe('image.svg');
    expect(data.grid[0].altText).toBe('image.svg');
  });
});
