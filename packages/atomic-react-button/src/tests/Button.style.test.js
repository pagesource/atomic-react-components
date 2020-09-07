import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Button from '../Button';

import Theme from '../../../../lib/styles/themes/base';

describe('Button', () => {
  let button = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    button = shallow(<Button theme={theme} />);
    expect(button).toMatchSnapshot();
  });
});
