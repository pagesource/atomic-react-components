import React from 'react';
import { shallow } from 'enzyme';
import { ReactSVG } from 'react-svg';
// import { IconVanilla } from '../index';

describe('<Icon />', () => {
  test('should render correctly', () => {
    const IconComponentWrapper = shallow(<ReactSVG title="play">Test</ReactSVG>);
    expect(IconComponentWrapper).toMatchSnapshot();
  });

  it('should have id', () => {
    const IconComponentWrapper = shallow(<ReactSVG id="pause">Test</ReactSVG>);
    expect(IconComponentWrapper.props()).toHaveProperty('id');
  });
});
