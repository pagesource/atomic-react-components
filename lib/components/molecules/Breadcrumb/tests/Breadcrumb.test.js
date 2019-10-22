import React from 'react';
import { shallow } from 'enzyme';

import { BreadcrumbVanilla } from '../index';
import defaultConfig from '../Breadcrumb.mock';

describe('<Breadcrumb />', () => {
  let BreadcrumbComponent = '';
  beforeEach(() => {
    BreadcrumbComponent = shallow(<BreadcrumbVanilla {...defaultConfig} />);
  });

  test('should render correctly', () => {
    expect(BreadcrumbComponent).toMatchSnapshot();
  });
});
