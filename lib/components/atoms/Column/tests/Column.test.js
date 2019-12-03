import { shallow } from 'enzyme';

import Column from '../index';

describe('<Column />', () => {
  let ColumnComponent = '';
  beforeEach(() => {
    ColumnComponent = shallow(<Column>Test</Column>);
  });

  test('should render correctly', () => {
    expect(ColumnComponent).toMatchSnapshot();
  });
});
