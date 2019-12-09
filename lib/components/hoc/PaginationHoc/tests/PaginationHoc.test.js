import React from 'react';
import { shallow } from 'enzyme';

import { PaginationHocVanilla } from '../index';

describe('<PaginationHoc />', () => {
  let PaginationHocComponent = '';
  beforeEach(() => {
    PaginationHocComponent = shallow(<PaginationHocVanilla>Test</PaginationHocVanilla>);
  });

  test('should render correctly', () => {
    expect(PaginationHocComponent).toMatchSnapshot();
  });
});
