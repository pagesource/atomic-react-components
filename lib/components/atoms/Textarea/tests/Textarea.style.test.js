import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Textarea from '../Textarea';
import Theme from '../../../../styles/themes/base';

describe('Select Styled component', () => {
  const theme = { ...Theme };

  test('should render correctly', () => {
    const input = shallow(<Textarea theme={theme} />);
    expect(input).toMatchSnapshot();
  });
});
