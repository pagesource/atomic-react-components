import { shallow } from 'enzyme';

import Toast from '../index';

describe('<Toast />', () => {
  let ToastComponent = '';
  beforeEach(() => {
    ToastComponent = shallow(<Toast>Test</Toast>);
  });

  test('should render correctly', () => {
    expect(ToastComponent).toMatchSnapshot();
  });
});
