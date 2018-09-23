import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Heading from '..';

const props = {
  children: 'Sample',
  className: '',
};

describe('Heading Component', () => {
  let heading;

  test('should render correctly and match snapshot', () => {
    heading = shallow(<Heading {...props} />);
    expect(heading).toMatchSnapshot();
  });

  test('should render with styles correctly and match snapshot', () => {
    heading = renderer.create(<Heading {...props} />).toJSON();
    expect(heading).toMatchSnapshot();
  });
});
