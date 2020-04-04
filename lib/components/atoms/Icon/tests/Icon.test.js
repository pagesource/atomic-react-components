import React from 'react';
import { shallow } from 'enzyme';
import { ReactComponent as IconClose } from '../../../../static/images/close.svg';
import Icon from '../Icon';

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
