import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import { DotsVanilla as Dots } from '../index';
import Button from '../../../../atoms/Button';

describe('<Dots />', () => {
  let DotsComponent = '';
  beforeEach(() => {
    DotsComponent = shallow(<Dots totalSlides={5}>Test</Dots>);
  });

  test('should render correctly', () => {
    expect(DotsComponent).toMatchSnapshot();
  });

  test('should render buttons equal to number of totalSlides', () => {
    expect(DotsComponent.find(Button).length).toEqual(5);
  });
});
