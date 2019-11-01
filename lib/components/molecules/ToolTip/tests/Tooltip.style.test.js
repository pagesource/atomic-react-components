import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Tooltip from '../Tooltip';
import Theme from '../../../../styles/theme';

describe('Tooltip', () => {
  let tooltip = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    tooltip = shallow(<Tooltip theme={theme} />);
    expect(tooltip).toMatchSnapshot();
  });
});
