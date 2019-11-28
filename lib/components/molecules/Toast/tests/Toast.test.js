import React from 'react';
import { shallow } from 'enzyme';

import Toast from '../index';

describe('<Toast />', () => {
  let ToastComponent = '';
  beforeEach(() => {
    ToastComponent = shallow(<Toast>Test</Toast>);
  });

  test('should render a <div/>', () => {
    expect(ToastComponent.find('div').length).toEqual(2);
  });

  // test('should render correctly', () => {
  //   expect(ToastComponent).toMatchSnapshot();
  // });
});
