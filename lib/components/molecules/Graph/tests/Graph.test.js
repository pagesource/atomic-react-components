import { shallow } from 'enzyme';

import Graph from '../index';

describe('<Graph />', () => {
  let GraphComponent = '';
  beforeEach(() => {
    GraphComponent = shallow(<Graph>Test</Graph>);
  });

  test('should render correctly', () => {
    expect(GraphComponent).toMatchSnapshot();
  });
});
