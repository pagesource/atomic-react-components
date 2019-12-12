import React from 'react';
import { shallow } from 'enzyme';
import { ToastVanilla } from '../index';
import defaultToast from '../Toast.mock';

describe('<Toast />', () => {
  let ToastComponent = '';
  beforeEach(() => {
    ToastComponent = shallow(<ToastVanilla>Test</ToastVanilla>);
  });

  test('<Toast />should render correctly', () => {
    expect(ToastComponent).toMatchSnapshot();
  });
});

describe('<Toast /> Component', () => {
  const ToastComponentInvisible = shallow(
    <ToastVanilla {...defaultToast} isVisible={false}>
      Test
    </ToastVanilla>
  );
  const ToastComponentVisible = shallow(
    <ToastVanilla {...defaultToast}>
      <img src="/images/info.svg" alt="Information Icon" />
      Wow so easy!
    </ToastVanilla>
  );
  test('is rendering root div,if isVisible prop is true ', () => {
    expect(ToastComponentVisible.find('div.toast').length).toEqual(1);
  });

  test('not rendering root div,if isVisible prop is false', () => {
    expect(ToastComponentInvisible.find('div.toast').length).toEqual(0);
  });

  test('is rendering all necessary elements rendered if isVisible prop is true', () => {
    expect(ToastComponentVisible.exists('Button')).toBe(true);
    expect(ToastComponentVisible.exists('img')).toBe(true);
    expect(ToastComponentVisible.exists('div.toast-text')).toBe(true);
    expect(ToastComponentVisible.exists('span')).toBe(true);
    expect(ToastComponentVisible.find('Button').length).toEqual(1);
    expect(ToastComponentVisible.find('img').length).toEqual(2);
    expect(ToastComponentVisible.find('div.toast-text').length).toEqual(1);
    expect(ToastComponentVisible.find('span').length).toEqual(1);
  });

  test('validate children rendering', () => {
    expect(ToastComponentVisible.find('div.toast-text').children().length).toEqual(2);
  });
});

describe('<Toast /> Component is checking effects on', () => {
  const ToastComponentVisible = shallow(<ToastVanilla {...defaultToast}>Test</ToastVanilla>);
  test('onClick event, should dismiss the toast when clicking  on click of X button click', () => {
    ToastComponentVisible.find('.toast-close').simulate('click');
    expect(ToastComponentVisible.find('div.toast').length).toEqual(0);
  });
});
