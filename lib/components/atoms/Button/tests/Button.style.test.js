import { shallow } from 'enzyme';
import 'jest-styled-components';

import Button from '../';
import Theme from '../../../../styles/theme';
import { DESKTOP, MOBILE } from '../../../../constants';

describe('Button', () => {
  let button = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    theme.deviceType = DESKTOP;
    button = shallow(<Button theme={theme} />);
    expect(button).toMatchSnapshot();
  });

  test('should render correctly for mobile', () => {
    theme.deviceType = MOBILE;
    button = shallow(<Button theme={theme} />);
    expect(button).toMatchSnapshot();
  });
});
