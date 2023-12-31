import { GridImage } from '.';
import mock from './mock';

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
