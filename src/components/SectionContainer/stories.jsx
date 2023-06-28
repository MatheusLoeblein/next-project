import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga
          enim quaerat inventore consequatur earum pariatur ipsa placeat facere
          cupiditate laborum sapiente amet officia error, a ex? Cum, numquam
          voluptates!
        </p>
      </div>
    ),
  },
  argsTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
