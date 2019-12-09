import React from 'react';
import { shallow } from 'enzyme';

import { PaginationVanilla } from '../index';

describe('<Pagination />', () => {
  let PaginationComponent = '';
  beforeEach(() => {
    PaginationComponent = shallow(<PaginationVanilla />);
  });

  test('should render correctly', () => {
    expect(PaginationComponent).toMatchSnapshot();
  });

  it('should render an `.pagination`', () => {
    expect(PaginationComponent.find('.pagination')).toHaveLength(1);
  });

  it('should render an `.last`', () => {
    expect(PaginationComponent.find('.last')).toHaveLength(1);
  });

  it('should render an `.previous`', () => {
    expect(PaginationComponent.find('.previous')).toHaveLength(1);
  });

  it('should render an `.next`', () => {
    expect(PaginationComponent.find('.next')).toHaveLength(1);
  });
});
