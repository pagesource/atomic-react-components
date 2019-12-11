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

  it('should test click event on first button', () => {
    const props = { paginate: jest.fn() };
    PaginationComponent = shallow(<PaginationVanilla {...props}>Sample</PaginationVanilla>);
    PaginationComponent.find('.btn-first').simulate('click');
    expect(props.paginate).toHaveBeenCalled();
  });

  it('should test click event on next button', () => {
    const props = { paginate: jest.fn() };
    PaginationComponent = shallow(<PaginationVanilla {...props}>Sample</PaginationVanilla>);
    PaginationComponent.find('.next')
      .find('Button')
      .simulate('click');
    expect(props.paginate).toHaveBeenCalled();
  });

  it('should test click event on last button', () => {
    const props = { paginate: jest.fn() };
    PaginationComponent = shallow(<PaginationVanilla {...props}>Sample</PaginationVanilla>);
    PaginationComponent.find('.last')
      .find('Button')
      .simulate('click');
    expect(props.paginate).toHaveBeenCalled();
  });

  it('should test click event on previous button', () => {
    const props = { paginate: jest.fn() };
    PaginationComponent = shallow(<PaginationVanilla {...props}>Sample</PaginationVanilla>);
    PaginationComponent.find('.previous')
      .find('Button')
      .simulate('click');
    expect(props.paginate).toHaveBeenCalled();
  });
});
