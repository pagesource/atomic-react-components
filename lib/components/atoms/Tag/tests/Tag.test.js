import React from 'react';
import { shallow } from 'enzyme';

import { TagVanilla } from '../index';
import defaultConfig from '../Tag.mock';

describe('<Tag />', () => {
  let TagComponent = '';
  beforeEach(() => {
    TagComponent = shallow(<TagVanilla {...defaultConfig}>Test</TagVanilla>);
  });

  test('should render correctly', () => {
    expect(TagComponent).toMatchSnapshot();
  });

  test('should render provided text', () => {
    expect(TagComponent.text()).toEqual('Test');
  });

  test.skip('should control remove button availability through prop', () => {
    expect(TagComponent.exists('Button[variation="icon-only"]')).toEqual(false);
    TagComponent.setProps({ variation: 'removable' });
    expect(TagComponent.exists('Button[variation="icon-only"]')).toEqual(true);
  });

  test.skip('should call parent method on remove if available', () => {
    const mockFunctionParent = jest.fn();
    const setShowTag = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation((init) => [init, setShowTag]);

    TagComponent.setProps({ variation: 'removable', onRemove: mockFunctionParent });
    TagComponent.find('Button[variation="icon-only"]').at(0).simulate('click');
    expect(setShowTag).toHaveBeenCalledWith(false);
    expect(mockFunctionParent).toHaveBeenCalled();
  });
});
