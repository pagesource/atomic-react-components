import React from 'react';
import { shallow } from 'enzyme';

import { IconVanilla } from '../index';

describe('<Icon />', () => {
  test('should render correctly', () => {
    const IconComponentWrapper = shallow(<IconVanilla title="play">Test</IconVanilla>);
    expect(IconComponentWrapper).toMatchSnapshot();
  });

  it('should have id', () => {
    const IconComponentWrapper = shallow(<IconVanilla id="pause">Test</IconVanilla>);
    expect(IconComponentWrapper.props()).toHaveProperty('id');
  });
});
