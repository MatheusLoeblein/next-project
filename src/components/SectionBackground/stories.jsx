import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga
          enim quaerat inventore consequatur earum pariatur ipsa placeat facere
          cupiditate laborum sapiente amet officia error, a ex? Cum, numquam
          voluptates!
        </p>
      </>
    ),
    background: false,
  },
  argsTypes: {
    children: { type: '' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
