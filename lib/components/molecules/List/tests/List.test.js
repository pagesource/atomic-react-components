import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import List from '../index';

describe('<List />', () => {
  let ListComponent = '';
  beforeEach(() => {
    ListComponent = shallow(
      <List>
        <li>This is list item</li>
        <li>This is list item</li>
      </List>
    );
  });

  test('should render default view correctly', () => {
    expect(ListComponent).toMatchSnapshot();
  });
});
