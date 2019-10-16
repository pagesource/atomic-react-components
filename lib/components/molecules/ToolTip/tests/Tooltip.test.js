import { shallow } from 'enzyme';

import Tooltip from '../index';
import { defaultConfig, buttonSubmit, buttonSubmitDisabled } from '../Tooltip.mock';

describe('<Tooltip />', () => {
  test('should render correctly with icon', () => {
    const TooltipComponent = shallow(<Tooltip {...defaultConfig} />);
    expect(TooltipComponent).toMatchSnapshot();
  });
  test('should render correctly with clickable button', () => {
    const TooltipComponent = shallow(<Tooltip {...buttonSubmit} />);
    expect(TooltipComponent).toMatchSnapshot();
  });
  test('should render correctly disabled button', () => {
    const TooltipComponent = shallow(<Tooltip {...buttonSubmitDisabled} />);
    expect(TooltipComponent).toMatchSnapshot();
  });
});
