import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form as FormWrapper, Field } from 'formik';
import { buildSchema } from '../../../core/utils/buildValidationSchema';
import { noop } from '../../../core/utils/noop';
import Debug from './Debug';
import FieldInput from './FieldInput';
import FieldSelect from './FieldSelect';
import FieldTextarea from './FieldTextarea';
import FieldRadioGroup from './FieldRadioGroup';
import FieldCheckbox from './FieldCheckbox';
import FieldToggle from './FieldToggle';
import FieldFileInput from './FieldFileInput';
import DDFileInput from './DragDropInput';

class Form extends React.PureComponent {
  // eslint-disable-next-line
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

  // eslint-disable-next-line react/sort-comp
  getSchema = (yupValidationSchema = null, validationSchema = null) => {
    if (yupValidationSchema) return yupValidationSchema;
    return validationSchema ? buildSchema(validationSchema) : null;
  };

  static Checkbox = FieldCheckbox;

  static Field = Field;

  static Input = FieldInput;

  static RadioGroup = FieldRadioGroup;

  static Select = FieldSelect;

  static Textarea = FieldTextarea;

  static Toggle = FieldToggle;

  static FieldFile = FieldFileInput;

  static DDFile = DDFileInput;

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
        {...formWrapperProps}
      >
        {() => (
          <FormWrapper {...others} noValidate>
            {children}
            {debug && <Debug />}
          </FormWrapper>
        )}
      </Formik>
    );
  }
}

Form.propTypes = {
  className: PropTypes.string,
  action: PropTypes.string.isRequired,
  initialValues: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  debug: PropTypes.bool,
  validationSchema: PropTypes.objectOf(PropTypes.object),
  validate: PropTypes.func,
  validateOnChange: PropTypes.bool,
  validateOnBlur: PropTypes.bool,
  formWrapperProps: PropTypes.objectOf(PropTypes.object),
  yupValidationSchema: PropTypes.func,
};

export default Form;
