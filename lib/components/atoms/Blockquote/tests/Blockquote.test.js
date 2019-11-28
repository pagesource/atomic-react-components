import { shallow } from 'enzyme';

import Blockquote from '../index';

describe('<Blockquote />', () => {
  let BlockquoteComponent = '';
  beforeEach(() => {
    BlockquoteComponent = shallow(<Blockquote>Test</Blockquote>);
  });

  test('should render correctly', () => {
    expect(BlockquoteComponent).toMatchSnapshot();
  });
});
