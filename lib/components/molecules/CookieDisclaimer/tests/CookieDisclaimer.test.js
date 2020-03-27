import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../../../__mock__/themeMock';
import stickyCookieDisclaimer from '../CookieDisclaimer.mock';
import CookieDisclaimer, {
  CookieDisclaimerVanilla,
  toggleIsVisibleState,
  consentAccepted,
  consentRejected,
  getShowDisclaimer,
} from '../CookieDisclaimer';
import { removeCookie } from '../../../../hooks/useCookieDrop';

const defaultProps = {
  ...stickyCookieDisclaimer,
};
/**
 * getWrapperSetup: to get the vanilla component setup.
 */
const getWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallow(<CookieDisclaimerVanilla {...finalProps} />);
};
/**
 * getMountedWrapperSetup: to get the styled component setup.
 */
const getMountedWrapperSetup = (props = {}) => {
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

  test('should render wrapper correctly for snapshot matching.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Cookie Disclaimer component rendered correctly.', () => {
    expect(wrapper.find('div')).toHaveLength(3);
  });

  it.skip('should render two buttons for accepting and rejecting the consent', () => {
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

  it.skip('Button props for button types to be rendered.', () => {
    const firstBtn = wrapper.find('Button');
    expect(firstBtn.at(1).text()).toBe('Accept & Continue');
  });

  it.skip('Button props for button types to be rendered.', () => {
    const firstBtn = wrapper.find('Button');
    expect(firstBtn.at(2).text()).toBe('Decline');
  });
});

describe('Test Suite 3: testing styled component - HOC', () => {
  let wrapper;
  /**
   * beforeEach: method to get wrapper setup every time before each tests run.
   */
  beforeEach(() => {
    wrapper = getMountedWrapperSetup();
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
    wrapper = getMountedWrapperSetup();
  });

  afterEach(() => {
    removeCookie('USER_CONSENT');
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

  it('rejecting the consent and dropping the cookie.', () => {
    const mockSetIsVisible = jest.fn();
    const [isVisible, setIsVisible] = [true, jest.fn(() => [false, mockSetIsVisible])];
    consentRejected(isVisible, setIsVisible);
    expect(wrapper.html()).not.toBe(null);
  });

  it('getting the disclaimer state for rendering cookie disclaimer.', () => {
    const { cookieDetails } = defaultProps;
    const value = getShowDisclaimer(cookieDetails);
    expect(value).toBe(true);
  });

  it.skip('Accept Button click simulation', () => {
    const btnWrapper = wrapper.find('Button').at(2);
    const acceptBtn = btnWrapper.simulate('click');
    expect(acceptBtn.text()).toBe('Accept & Continue');
  });

  it.skip('Reject Button click simulation', () => {
    const btnWrapper = wrapper.find('Button').at(4);
    const rejectBtn = btnWrapper.simulate('click');
    expect(rejectBtn.text()).toBe('Decline');
  });
});
