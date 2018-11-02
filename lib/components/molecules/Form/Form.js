// @flow
import React from 'react';
import { Formik, Form as FormWrapper, Field } from 'formik';
import type { Node } from 'react';
import { buildSchema } from '../../../core/utils/buildValidationSchema';
import { noop } from '../../../core/utils/noop';
import Debug from './Debug';
import FieldInput from './FieldInput';
import FieldSelect from './FieldSelect';
import FieldRadioGroup from './FieldRadioGroup';
import FieldCheckbox from './FieldCheckbox';

type Props = {
  className?: string,
  action: string,
  initialValues?: any,
  children: Node,
  handleSubmit: Function,
  debug?: boolean,
  validationSchema?: Object | null,
  validate?: Function | null,
  validateOnChange?: boolean,
  validateOnBlur?: boolean,
  formWrapperProps?: Object,
  yupValidationSchema?: Function | null,
};

class Form extends React.PureComponent<Props> {
  static defaultProps = {
    debug: false,
    className: '',
    initialValues: null,
    validationSchema: null,
    validateOnChange: true,
    validateOnBlur: true,
    formWrapperProps: {},
    yupValidationSchema: null,
    validate: noop,
  };

  static Input = FieldInput;

  static Select = FieldSelect;

  static RadioGroup = FieldRadioGroup;

  static Checkbox = FieldCheckbox;

  static Field = Field;

  getSchema = (
    yupValidationSchema: Function | null = null,
    validationSchema: Object | null = null
  ) => {
    if (yupValidationSchema) return yupValidationSchema;
    return validationSchema ? buildSchema(validationSchema) : null;
  };

  render() {
    const {
      action,
      className,
      handleSubmit,
      initialValues,
      children,
      debug,
      validationSchema,
      validate,
      validateOnChange,
      validateOnBlur,
      formWrapperProps,
      yupValidationSchema,
      ...others
    } = this.props;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={this.getSchema(yupValidationSchema, validationSchema)}
        validate={validate}
        onSubmit={handleSubmit}
        validateOnChange={validateOnChange}
        validateOnBlur={validateOnBlur}
        render={() => (
          <FormWrapper noValidate {...others}>
            {children}
            {debug && <Debug />}
          </FormWrapper>
        )}
        {...formWrapperProps}
      />
    );
  }
}

export default Form;
