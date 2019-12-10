import React from 'react';
import { shallow } from 'enzyme';

import { PaginationHocVanilla } from '../index';

describe('<PaginationHoc />', () => {
  let PaginationHocComponent = '';
  const mockedComponent = jest.fn();
  const PaginationList = PaginationHocVanilla(mockedComponent);
  beforeEach(() => {
    PaginationHocComponent = shallow(<PaginationList />);
  });

  test('should render correctly', () => {
    expect(PaginationHocComponent).toMatchSnapshot();
  });
});
