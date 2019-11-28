import { shallow } from 'enzyme';

import Toggle from '../index';
// import Input from '../../../atoms/Input/Input';
import defaultCheckbox from '../Toggle.mock';

describe('<Toggle />', () => {
  let ToggleComponent = '';
  beforeEach(() => {
    ToggleComponent = shallow(<Toggle {...defaultCheckbox}>Test</Toggle>);
  });

  test('should be propertags', () => {
    expect(ToggleComponent.find('label')).toBeTruthy();
  });

  test('should be propertags', () => {
    expect(ToggleComponent.find('input')).toBeTruthy();
  });

  test('should have input with label', () => {
    ToggleComponent.setProps({ labelName: 'value' });
    expect(ToggleComponent.find('.labelName').text()).toEqual('Value');
  });

  test('should render correctly', () => {
    expect(ToggleComponent).toMatchSnapshot();
  });

  test('should render a div', () => {
    expect(ToggleComponent.find('div')).toBeTruthy();
  });
});
