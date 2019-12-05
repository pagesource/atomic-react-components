import React from 'react';
import { shallow, render } from 'enzyme';

import { StickyBarVanilla } from '../index';
import List from '../../List';

describe('<StickyBar />', () => {
  let StickyBarComponent = '';
  beforeEach(() => {
    StickyBarComponent = shallow(<StickyBarVanilla>Test</StickyBarVanilla>);
  });

  // test('should render correctly', () => {
  //   expect(StickyBarComponent).toMatchSnapshot();
  // });
  it('should render the List Component', () => {
    expect(StickyBarComponent.find(List)).toHaveLength(1);
  });
});
