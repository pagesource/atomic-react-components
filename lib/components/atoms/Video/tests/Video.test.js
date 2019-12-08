import React from 'react';
import { shallow } from 'enzyme';

import { VideoVanilla } from '../index';

describe('<Video />', () => {
  let VideoComponent = '';
  beforeEach(() => {
    VideoComponent = shallow(<VideoVanilla>Test</VideoVanilla>);
  });

  test('should render correctly', () => {
    expect(VideoComponent).toMatchSnapshot();
  });
});
