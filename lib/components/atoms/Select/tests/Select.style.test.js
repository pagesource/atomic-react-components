import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { SelectVanilla } from '../Select';
// eslint-disable-next-line import/no-unresolved
import Theme from '../../../../styles/theme';

describe('Select Styled component', () => {
  const theme = { ...Theme };

  test('should render correctly', () => {
    const input = shallow(
      <SelectVanilla theme={theme} name="userType" options={['Option 1', 'Option 2']} />
    );
    expect(input).toMatchSnapshot();
  });
});
