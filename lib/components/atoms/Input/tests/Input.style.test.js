import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';
import Theme from '../../../../styles/themes/base';

describe('Input Styled component', () => {
  const theme = { ...Theme };

  test('should render correctly', () => {
    const input = shallow(<Input theme={theme} value={10} name="userName" />);
    expect(input).toMatchSnapshot();
  });
});
