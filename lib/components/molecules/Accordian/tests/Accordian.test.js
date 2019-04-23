import { shallow } from 'enzyme';
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
