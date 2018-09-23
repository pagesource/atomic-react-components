import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Para from '..';

const props = {
  children: 'Sample',
  className: '',
};

describe('Para Component', () => {
  let paragraph;

  test('should render correctly and match snapshot', () => {
    paragraph = shallow(<Para {...props}>This is Para text</Para>);
    expect(paragraph).toMatchSnapshot();
  });

  test('should render with styles correctly and match snapshot', () => {
    paragraph = renderer.create(<Para {...props}>This is Para text</Para>).toJSON();
    expect(paragraph).toMatchSnapshot();
  });
});
