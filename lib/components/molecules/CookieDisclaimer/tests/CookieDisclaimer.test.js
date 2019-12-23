import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../../../__mock__/themeMock';
import CookieDisclaimer, {
  CookieDisclaimerVanilla,
  toggleIsVisibleState,
  consentAccepted,
} from '../CookieDisclaimer';

const defaultProps = {
  'data-name': 'cookie-disclaimer',
};
/**
 * getWrapperSetup: to get the vanilla component setup.
 */
const getWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallow(<CookieDisclaimerVanilla {...finalProps} />);
};
/**
 * getStyledWrapperSetup: to get the styled component setup.
 */
const getStyledWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  const vanillaWrapper = <CookieDisclaimer {...finalProps} />;
  return mountWithTheme(vanillaWrapper);
};

describe("Test Suite 1: Check for component and it's child rendered correctly.", () => {
  let wrapper;
  /**
   * beforeEach: method to get wrapper setup every time before each tests run.
   */
  beforeEach(() => {
    const mockSetIsVisible = jest.fn();
    React.useState = jest.fn(() => [true, mockSetIsVisible]);
    wrapper = getWrapperSetup();
  });

  it('Cookie Disclaimer component rendered correctly.', () => {
    expect(wrapper.find('div')).toHaveLength(2);
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

describe('Test Suite 3: testing styled component - HOC', () => {
  let wrapper;
  /**
   * beforeEach: method to get wrapper setup every time before each tests run.
   */
  beforeEach(() => {
    wrapper = getStyledWrapperSetup();
  });

  it('should rendered the component properly when styles are being applied.', () => {
    expect(wrapper.html()).not.toBe(null);
  });
});

describe('Test Suite 4: testing functional behaviour of the cookie disclaimer.', () => {
  let wrapper;
  /**
   * beforeEach: method to get wrapper setup every time before each tests run.
   */
  beforeEach(() => {
    wrapper = getStyledWrapperSetup();
  });

  it('setting the isVisible variable to false', () => {
    const mockSetIsVisible = jest.fn();
    const [isVisible, setIsVisible] = [true, jest.fn(() => [false, mockSetIsVisible])];

    toggleIsVisibleState(isVisible, setIsVisible);
    expect(wrapper.html()).not.toBe(null);
  });

  it('accepting the consent and dropping the cookie.', () => {
    const mockSetIsVisible = jest.fn();
    const [isVisible, setIsVisible] = [true, jest.fn(() => [false, mockSetIsVisible])];

    consentAccepted(isVisible, setIsVisible);
    expect(wrapper.html()).not.toBe(null);
  });
});
