import { shallow } from 'enzyme';

import { ImageVanilla } from '../Image';

describe('Image Component', () => {
  const sampleProps = {
    src: 'http://abc.com',
    placeholderSrc: 'http://xyz.com',
    alt: 'ABC',
  };

  test('should render correctly and match snapshots', () => {
    const image = shallow(<ImageVanilla {...sampleProps} />);
    expect(image).toMatchSnapshot();
  });

  test('should change image src on error', () => {
    const image = shallow(<ImageVanilla {...sampleProps} />);
    image.simulate('error', { target: image });
    expect(image.src).toBe(sampleProps.placeholderSrc);
  });
});
