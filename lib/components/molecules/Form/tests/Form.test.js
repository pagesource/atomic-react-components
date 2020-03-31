import React from 'react';
import * as Yup from 'yup';
import 'mutationobserver-shim';

import { shallowWithTheme } from '../../../../../__mock__/themeMock';
import Form from '..';
import { ButtonVanilla } from '../../../atoms/Button';

global.MutationObserver = window.MutationObserver;

describe('Form Component', () => {
  const userFormProps = {
    initialValues: {
      email: '',
      username: '',
      typeOfUser: '',
    },
    debug: false,
    action: '/',
    validationSchema: {
      username: {
        max: [15, 'Max limit reached'],
        required: 'User name Required',
      },
      email: {
        max: [30, 'Max reached'],
        email: 'Invalid email format',
        required: 'Required',
      },
    },
  };

  const SignupSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  });

  const userFormNameInputProps = {
    name: 'username',
    type: 'text',
    label: 'User Name',
  };

  const userFormSelectProps = {
    options: ['Admin', 'Read Only'],
    name: 'typeOfUser',
    label: 'Type of user',
    validateOnBlur: true,
  };

  test('should render form correctly', () => {
    const FormTag = (
      <Form {...userFormProps}>
        <div>
          <Form.Select {...userFormSelectProps} />
          <Form.Input {...userFormNameInputProps} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    const Wrapper = shallowWithTheme(FormTag);
    expect(Wrapper).toMatchSnapshot();
  });

  test('should render form field with yupValidationSchema', () => {
    const FormField = (
      <Form {...userFormProps} yupValidationSchema={SignupSchema}>
        <div>
          <Form.Input {...userFormNameInputProps} />
          <Form.Select {...userFormSelectProps} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    const Wrapper = shallowWithTheme(FormField);
    expect(Wrapper).toMatchSnapshot();
  });

  test('should render form field with no validation', () => {
    const formProps = { ...userFormProps };
    delete formProps.validationSchema;
    const FormField = (
      <Form {...formProps}>
        <div>
          <Form.Input {...userFormNameInputProps} />
          <Form.Select {...userFormSelectProps} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    const Wrapper = shallowWithTheme(FormField);
    expect(Wrapper).toMatchSnapshot();
  });

  test('getSchema should return null if no params are passed', () => {
    const formProps = { ...userFormProps };
    delete formProps.validationSchema;
    const FormField = (
      <Form {...formProps}>
        <div>
          <Form.Input {...userFormNameInputProps} />
          <Form.Select {...userFormSelectProps} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    const Wrapper = shallowWithTheme(FormField);
    expect(Wrapper.instance()).toBeNull();
  });
});
