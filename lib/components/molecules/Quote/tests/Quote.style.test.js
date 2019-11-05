import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Quote from '../Quote';
import Theme from '../../../../styles/theme';

describe('Quote', () => {
  let quoteComp = '';
  const theme = { ...Theme };

  test('should render quote correctly', () => {
    quoteComp = shallow(<Quote theme={theme} />);
    expect(quoteComp).toMatchSnapshot();
  });
});
