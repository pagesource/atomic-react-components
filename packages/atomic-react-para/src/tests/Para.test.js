import React from 'react';
import { shallow, render } from 'enzyme';

import { ParaVanilla } from '..';

const props = {
  children: 'Sample',
  className: '',
  elementLocator: 'my-paragraph',
};

describe('Para Component', () => {
  let paragraph;

  test('should render correctly and match snapshot', () => {
    paragraph = shallow(<ParaVanilla {...props}>This is Para text</ParaVanilla>);
    expect(paragraph).toMatchSnapshot();
  });
  test('should check the data attribute of para', () => {
    const para = render(<ParaVanilla {...props} />);

    expect(para.attr('data-locator')).toEqual(`para-${props.elementLocator}`);
  });
});
