import React from 'react';
import { shallow } from 'enzyme';

import { IconVanilla } from '../index';

describe('<Icon />', () => {
  let IconComponent = '';
  beforeEach(() => {
    IconComponent = shallow(
      <IconVanilla alt="test" path="abcd">
        Test
      </IconVanilla>
    );
  });

  test('should render correctly', () => {
    expect(IconComponent).toMatchSnapshot();
  });
});
