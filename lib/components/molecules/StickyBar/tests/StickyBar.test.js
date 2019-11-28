import { shallow } from 'enzyme';

import StickyBar from '../index';

describe('<StickyBar />', () => {
  let StickyBarComponent = '';
  beforeEach(() => {
    StickyBarComponent = shallow(
      <StickyBar>
        <li>Item 1</li>
        <li>Item 1</li>
      </StickyBar>
    );
  });

  test('should render correctly', () => {
    expect(StickyBarComponent).toMatchSnapshot();
  });
});
