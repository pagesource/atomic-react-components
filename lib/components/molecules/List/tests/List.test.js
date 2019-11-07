import React from 'react';
import { shallow } from 'enzyme';

import { ListVanilla } from '../index';

describe('<List />', () => {
  let ListComponent = '';
  beforeEach(() => {
    ListComponent = shallow(
      <ListVanilla>
        <li>This is list item</li>
        <li>This is list item</li>
      </ListVanilla>
    );
  });

  test('should render default view correctly', () => {
    expect(ListComponent).toMatchSnapshot();
  });
});
