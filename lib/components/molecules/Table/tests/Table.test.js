import { shallow } from 'enzyme';

import Table from '../index';

describe('<Table />', () => {
  let TableComponent = '';
  beforeEach(() => {
    TableComponent = shallow(<Table>Test</Table>);
  });

  test('should render correctly', () => {
    expect(TableComponent).toMatchSnapshot();
  });
});
