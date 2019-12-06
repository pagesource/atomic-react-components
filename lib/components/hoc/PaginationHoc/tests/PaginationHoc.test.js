import React from 'react';
import { shallow, render, mount } from 'enzyme';

import PaginationHoc, { PaginationHocVanilla } from '../index';

describe('<PaginationHoc />', () => {
  let PaginationHocComponent = '';
  beforeEach(() => {
    PaginationHocComponent = shallow(<PaginationHocVanilla>Test</PaginationHocVanilla>);
  });

  test('should render correctly', () => {
    expect(PaginationHocComponent).toMatchSnapshot();
  });
});
