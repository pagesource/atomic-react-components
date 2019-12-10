import React from 'react';
// import { shallowWithTheme } from '../../../../../__mock__/themeMock';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { StickyBarVanilla } from '../index';
import List from '../../List';

configure({ adapter: new Adapter() });

describe('<StickyBar />', () => {
  let StickyBarComponent = '';
  beforeEach(() => {
    StickyBarComponent = shallow(
      <StickyBarVanilla>
        <li>This is list item</li>
        <li>This is list item</li>
      </StickyBarVanilla>
    );
  });

  it('should render the List Component', () => {
    expect(StickyBarComponent.find(List)).toHaveLength(1);
  });

  it('should render correctly', () => {
    expect(StickyBarComponent).toMatchSnapshot();
  });
});
