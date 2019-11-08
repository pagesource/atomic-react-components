import { shallow } from 'enzyme';

import WithScripts from '../index';

describe('<WithScripts />', () => {
  let WithScriptsComponent = '';
  beforeEach(() => {
    WithScriptsComponent = shallow(<WithScripts>Test</WithScripts>);
  });

  test('should render correctly', () => {
    expect(WithScriptsComponent).toMatchSnapshot();
  });
});
