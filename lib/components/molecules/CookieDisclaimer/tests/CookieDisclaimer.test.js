import React from 'react';
import { shallow } from 'enzyme';

import { CookieDisclaimerVanilla } from '../CookieDisclaimer';

const defaultProps = {
  'data-name': 'cookie-disclaimer',
};

const getWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallow(<CookieDisclaimerVanilla {...finalProps} />);
};

describe("Test Suite 1: Check for component and it's child rendered correctly.", () => {
  let wrapper;
  /**
   * beforeEach: method to get wrapper setup every time before each tests run.
   */
  beforeEach(() => {
    wrapper = getWrapperSetup();
  });

  it('Cookie Disclaimer component rendered correctly.', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render two buttons for accepting and rejecting the consent', () => {
    expect(wrapper.find('Button')).toHaveLength(3);
  });
});

describe("Test Suite 2: Check for component and it's child for default props correctly.", () => {
  let wrapper;
  /**
   * beforeEach: method to get wrapper setup every time before each tests run.
   */
  beforeEach(() => {
    wrapper = getWrapperSetup();
  });

  it('Button props for button types to be rendered.', () => {
    const firstBtn = wrapper.find('Button');
    expect(firstBtn.at(1).text()).toBe('Accept');
  });

  it('Button props for button types to be rendered.', () => {
    const firstBtn = wrapper.find('Button');
    expect(firstBtn.at(2).text()).toBe('Reject');
  });
});
