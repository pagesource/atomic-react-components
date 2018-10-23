import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Checkbox from '../Checkbox';
import Theme from '../../../../styles/theme';

describe('Checkbox', () => {
  let checkbox = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    checkbox = shallow(<Checkbox theme={theme} />);
    expect(checkbox).toMatchSnapshot();
  });
});
