import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { SelectVanilla } from '../Select';
import Theme from '../../../../styles/themes/base';

describe('Select Styled component', () => {
  const theme = { ...Theme };

  test('should render correctly', () => {
    const input = shallow(
      <SelectVanilla theme={theme} name="userType" options={['Option 1', 'Option 2']} />
    );
    expect(input).toMatchSnapshot();
  });
});
