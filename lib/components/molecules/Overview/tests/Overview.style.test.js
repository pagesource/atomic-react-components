import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Overview from '../Overview';
import Theme from '../../../../styles/theme';

describe('Overview', () => {
  let overview = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    overview = shallow(<Overview theme={theme} />);
    expect(overview).toMatchSnapshot();
  });
});
