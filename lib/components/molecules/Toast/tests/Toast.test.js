import React from 'react';
import { shallow, render, mount } from 'enzyme';

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

describe('<Toast /> functional behaviour',()=> {
  let ToastComponentInvisible;
  let ToastComponentVisible;
  ToastComponentInvisible = shallow(
    <ToastVanilla {...defaultToast} isVisible={false}>
      Test
    </ToastVanilla>
  );
  ToastComponentVisible = shallow(
    <ToastVanilla {...defaultToast}>
      Test
    </ToastVanilla>
  );
  test('Should be visible or invisible based on isVisible prop', () =>{
    expect(ToastComponentInvisible.find('div.toast').length).toEqual(0);
    expect(ToastComponentVisible.find('div.toast').length).toEqual(1);
    expect(ToastComponentVisible.find('img').length).toEqual(1);
  });

  test('Should have all necessary elements rendered if isVisible prop is true', () =>{
    expect(ToastComponentVisible.find('Button').length).toEqual(1);
    expect(ToastComponentVisible.find('img').length).toEqual(1);
    expect(ToastComponentVisible.find('div.toast-text').length).toEqual(1);
    expect(ToastComponentVisible.find('span').length).toEqual(1);
  });

  test('should dismiss the toast on click of X button click', () =>{
    ToastComponentVisible.find('.toast-close').simulate('onclick');
    expect(ToastComponentInvisible.find('div.toast').length).toEqual(0);
  })
});