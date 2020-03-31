import React from 'react';
import { shallow } from 'enzyme';

import { PaginationVanilla } from '../index';

describe('<Pagination />', () => {
  let PaginationComponent = '';
  const props = {
    pageSize: 10,
    data: [],
    onPageChange: jest.fn(),
    className: 'paginate',
    firstLabel: 'First',
    lastLabel: 'Last',
    nextLabel: 'Next',
    previousLabel: 'Previous',
    renderPaginationComponent: jest.fn(),
    totalPosts: 10,
    showNextBtn: true,
    showPreviousBtn: true,
    showLastBtn: true,
    showFirstBtn: true,
    currentPageAria: 'Current Page',
    paginationAriaLabel: 'Pagination',
    nextButtonAria: 'Next Button',
    previousButtonAria: 'Previous Button',
    firstButtonAria: 'First button',
    lastButtonAria: 'Last Button',
    currentPage: 1,
  };
  beforeEach(() => {
    PaginationComponent = shallow(<PaginationVanilla props={props} />);
  });

  test('should render correctly', () => {
    expect(PaginationComponent).toMatchSnapshot();
  });

  it('should render `.pagination` component', () => {
    expect(PaginationComponent.find('.pagination')).toHaveLength(1);
  });

  it('should render an `.last`', () => {
    expect(PaginationComponent.find('.last')).toHaveLength(1);
  });

  it('should render a `firstLabel`', () => {
    expect(PaginationComponent.find('.btn-first').text()).toEqual('First');
  });

  it('should render a `lastLabel`', () => {
    expect(PaginationComponent.find('.last').text()).toEqual('Last');
  });

  it('should test click event on first button', () => {
    PaginationComponent = shallow(<PaginationVanilla {...props}>Sample</PaginationVanilla>);
    PaginationComponent.find('.btn-first').simulate('click');
    expect(props.onPageChange).toHaveBeenCalled();
  });

  it.skip('should test click event on last button', () => {
    PaginationComponent = shallow(<PaginationVanilla {...props} />);
    console.log(PaginationComponent);
    PaginationComponent.find('.last').find('Button').simulate('click');
    expect(props.onPageChange).toHaveBeenCalled();
  });
});
