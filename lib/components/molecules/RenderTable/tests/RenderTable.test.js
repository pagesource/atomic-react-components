import { shallow } from 'enzyme';

import RenderTable from '../index';

describe('<RenderTable />', () => {
  let RenderTableComponent = '';
  beforeEach(() => {
    RenderTableComponent = shallow(<RenderTable>Test</RenderTable>);
  });

  test('should render correctly', () => {
    expect(RenderTableComponent).toMatchSnapshot();
  });
});
