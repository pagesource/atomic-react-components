import { shallow, mount } from 'enzyme';
import Accordian from '../index';
import AccordianSection from '../AccordianSection';

describe('<Accordian />', () => {
  let AccordianComponent = '';
  beforeEach(() => {
    AccordianComponent = shallow(<Accordian>Test</Accordian>);
  });

  test('should render correctly', () => {
    expect(AccordianComponent).toMatchSnapshot();
  });
});

describe('<AccordianSection />', () => {
  let AccordianComponent;

  beforeEach(() => {
    AccordianComponent = mount(<AccordianSection />);
  });

  test('Accordian should collapse correctly', () => {
    expect(AccordianComponent.find('.accordianBody').length).toEqual(0);
  });
});
