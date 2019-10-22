import { shallow, mount } from 'enzyme';

import { TooltipVanilla } from '../index';
import { defaultConfig, anchorConfig } from '../Tooltip.mock';

describe('<Tooltip />', () => {
  test('should render correctly with button', () => {
    const TooltipComponent = shallow(<TooltipVanilla {...defaultConfig} />);
    expect(TooltipComponent).toMatchSnapshot();
  });
  test('should render correctly with button', () => {
    const TooltipComponent = shallow(<TooltipVanilla {...anchorConfig} />);
    expect(TooltipComponent).toMatchSnapshot();
  });
  test('click of button shows tooltip', () => {
    const wrapper = mount(<TooltipVanilla {...defaultConfig} />);
    expect(wrapper.state().isOpen).toEqual(false);
    wrapper
      .find('.trigger-tooltip')
      .at(0)
      .simulate('click');
    expect(wrapper.state().isOpen).toEqual(true);
  });
});
