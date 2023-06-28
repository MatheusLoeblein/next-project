import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Nulla, at corporis, ipsam dolores totam iure est rerum commodi,
    doloribus expedita dicta facere doloremque tenetur laborum quia quos impedit maxime modi!`,
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
