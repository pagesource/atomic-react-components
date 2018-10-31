import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import { TextareaVanilla } from '../index';

describe('<Textarea />', () => {
  let TextareaComponent = '';
  beforeEach(() => {
    TextareaComponent = shallow(<TextareaVanilla />);
  });

  test('should render correctly', () => {
    expect(TextareaComponent).toMatchSnapshot();
  });
});
