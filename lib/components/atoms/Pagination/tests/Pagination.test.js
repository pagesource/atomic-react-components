import React from 'react';
import { shallow, render } from 'enzyme';

import Pagination, { PaginationVanilla } from '../index';

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
});
