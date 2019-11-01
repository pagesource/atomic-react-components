import React from 'react';
import { shallow, render } from 'enzyme';

import Label from '../Label';

describe('Label Component', () => {
  let label = '';

  test('should render correctly', () => {
    label = shallow(<Label htmlFor="userid"> User Name </Label>);
    expect(label).toMatchSnapshot();
  });

  test('should check the data attribute of label', () => {
    const sampleProps = { htmlFor: 'userid', elementLocator: 'my-custom-locator' };
    const image = render(<Label {...sampleProps} />);

    expect(image.attr('data-locator')).toEqual(sampleProps.elementLocator);
  });
});
