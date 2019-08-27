import { shallow } from 'enzyme';

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
