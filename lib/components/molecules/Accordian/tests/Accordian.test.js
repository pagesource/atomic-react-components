import { shallow, mount } from 'enzyme';
import Accordian from '../index';

describe('<Accordian />', () => {
  let AccordianComponent = '';
  beforeEach(() => {
    AccordianComponent = shallow(<Accordian>Test</Accordian>);
  });

  test('should render correctly', () => {
    expect(AccordianComponent).toMatchSnapshot();
  });
});

describe('<Accordian />', () => {
  let AccordianComponent;

  beforeEach(() => {
    AccordianComponent = mount(<Accordian />);
  });

  test('Accordian should collapse correctly', () => {
    expect(AccordianComponent.find('.closed').length).toEqual(1);
  });
});
