import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        debitis aut nam aperiam voluptas cupiditate expedita ut et
        necessitatibus ipsam, veritatis ad facere, animi veniam. Fugit
        dignissimos dolore commodi temporibus.
      </p>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        debitis aut nam aperiam voluptas cupiditate expedita ut et
        necessitatibus ipsam, veritatis ad facere, animi veniam. Fugit
        dignissimos dolore commodi temporibus.
      </p>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        debitis aut nam aperiam voluptas cupiditate expedita ut et
        necessitatibus ipsam, veritatis ad facere, animi veniam. Fugit
        dignissimos dolore commodi temporibus.
      </p>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        debitis aut nam aperiam voluptas cupiditate expedita ut et
        necessitatibus ipsam, veritatis ad facere, animi veniam. Fugit
        dignissimos dolore commodi temporibus.
      </p>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        debitis aut nam aperiam voluptas cupiditate expedita ut et
        necessitatibus ipsam, veritatis ad facere, animi veniam. Fugit
        dignissimos dolore commodi temporibus.
      </p>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        debitis aut nam aperiam voluptas cupiditate expedita ut et
        necessitatibus ipsam, veritatis ad facere, animi veniam. Fugit
        dignissimos dolore commodi temporibus.
      </p>

      <GoTop {...args} />
    </div>
  );
};
