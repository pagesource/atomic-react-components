import React from 'react';
import { shallow } from 'enzyme';
import { theme } from '@xt-pagesource/atomic-react-themes';

import Icon from '../Icon';

const IconClose = theme.icons.close;

describe('<Icon />', () => {
  test('should render correctly', () => {
    const IconComponentWrapper = shallow(
      <Icon title="close icon" width="30px" height="30px">
        <IconClose />
      </Icon>
    );
    expect(IconComponentWrapper).toMatchSnapshot();
  });
});
