import { GridContent } from '.';
import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
