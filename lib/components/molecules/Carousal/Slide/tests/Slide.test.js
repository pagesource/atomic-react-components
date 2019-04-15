import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import { SlideVanilla as Slide } from '../index';

describe('<Slide />', () => {
  let SlideComponent = '';
  beforeEach(() => {
    SlideComponent = shallow(<Slide className="test">Test</Slide>);
  });

  test('should render correctly', () => {
    expect(SlideComponent).toMatchSnapshot();
  });
});

describe('Slide Component', () => {
  let SlideComponent = '';
  beforeEach(() => {
    SlideComponent = shallow(<Slide className="test">Test</Slide>);
  });

  test('should have active-slide class if isActive prop is true', () => {
    SlideComponent.setProps({
      isActive: true,
    });
    expect(SlideComponent.find('div').hasClass('active-slide')).toBeTruthy();
  });
});
