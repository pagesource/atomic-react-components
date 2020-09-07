import React from 'react';
import { shallow } from 'enzyme';
import { theme } from '@xt-pagesource/atomic-react-themes';

import { SelectVanilla } from '../Select';

describe('Select Styled component', () => {
  const theme1 = { ...theme };

  test('should render correctly', () => {
    const input = shallow(
      <SelectVanilla theme={theme1} name="userType" options={['Option 1', 'Option 2']} />
    );
    expect(input).toMatchSnapshot();
  });
});
