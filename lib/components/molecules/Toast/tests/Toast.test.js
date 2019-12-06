import React from 'react';
import { shallow, render } from 'enzyme';

import { ToastVanilla } from '../index';

describe('<Toast />', () => {
  let ToastComponent = '';
  beforeEach(() => {
    ToastComponent = shallow(<ToastVanilla>Test</ToastVanilla>);
  });

  test('should render correctly', () => {
    expect(ToastComponent).toMatchSnapshot();
  });
});
