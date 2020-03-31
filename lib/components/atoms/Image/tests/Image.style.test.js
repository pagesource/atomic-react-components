import React from 'react';
import { shallow } from 'enzyme';
import Image from '../Image';
import { lazyLoadedImage } from '../Image.mock';

describe('Image Component with styles', () => {
  const sampleProps = {
    src: 'http://abc.com',
    placeholderSrc: 'http://xyz.com',
    alt: 'ABC',
  };

  test('should render correctly and match snapshots', () => {
    const image = shallow(<Image {...sampleProps} />);
    expect(image).toMatchSnapshot();
  });
  test('should render correctly with lazy load', () => {
    const image = shallow(<Image {...lazyLoadedImage} />);
    expect(image).toMatchSnapshot();
  });
});
