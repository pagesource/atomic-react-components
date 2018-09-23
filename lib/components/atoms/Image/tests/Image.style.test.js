import { shallow } from 'enzyme';

import Image from '../Image';

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
});
