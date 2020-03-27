import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

import Theme from '../../../../styles/themes/base';

describe('Button', () => {
  let button = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    button = shallow(<Button theme={theme} />);
    expect(button).toMatchSnapshot();
  });
});
