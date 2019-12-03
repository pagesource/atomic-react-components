import { shallow } from 'enzyme';

import Table from '../index';
import defaultConfig from '../Table.mock';

describe('<Table />', () => {
  const TableComponent = shallow(<Table {...defaultConfig}>Test</Table>);
  const table = TableComponent.find('table');
  const thead = table.find('thead');
  const tbody = table.find('tbody');

  it('should have table tag', () => {
    expect(TableComponent.find('table')).toBeTruthy();
  });

  it('should render columns based on thead', () => {
    expect(thead).toBeTruthy();
  });

  it('should render rows based on tbody', () => {
    expect(tbody).toBeTruthy();
  });

  test('should render correctly', () => {
    expect(TableComponent).toMatchSnapshot();
  });
});
