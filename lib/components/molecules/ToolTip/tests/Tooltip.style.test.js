import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Tooltip from '../Tooltip';
import Theme from '../../../../styles/theme';

describe('Button', () => {
  let button = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    button = shallow(<Tooltip theme={theme} />);
    expect(button).toMatchSnapshot();
  });
});
