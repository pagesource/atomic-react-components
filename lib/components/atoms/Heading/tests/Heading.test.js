import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Heading from '..';

const props = {
  children: 'Sample',
  className: '',
};

describe('Heading Component', () => {
  let heading;

  test('should render correctly and match snapshot', () => {
    heading = shallow(<Heading {...props} />);
    expect(heading).toMatchSnapshot();
  });
});
