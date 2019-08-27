import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Para from '..';

const props = {
  children: 'Sample',
  className: '',
};

describe('Para Component', () => {
  let paragraph;

  test('should render correctly and match snapshot', () => {
    paragraph = shallow(<Para {...props}>This is Para text</Para>);
    expect(paragraph).toMatchSnapshot();
  });
});
