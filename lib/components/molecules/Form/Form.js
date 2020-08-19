import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { buildSchema } from '../../../core/utils/buildValidationSchema';
import Debug from './Debug';
import FieldInput from './FieldInput';
import FieldSelect from './FieldSelect';
import FieldTextarea from './FieldTextarea';
import FieldRadioGroup from './FieldRadioGroup';
import FieldCheckbox from './FieldCheckbox';
import FieldToggle from './FieldToggle';
import FieldFileInput from './FieldFileInput';
import DDFileInput from './DragDropInput';

const Form = ({
  onSubmit,
  initialValues,
  children,
  debug,
  validate,
  validationSchema,
  yupValidationSchema,
}) => {
  const getSchema = () => {
    if (yupValidationSchema) return yupValidationSchema;
    return validationSchema ? buildSchema(validationSchema) : null;
  };
  const { handleSubmit, register, errors, setValue } = useForm({
    mode: validate,
    validationSchema: getSchema(yupValidationSchema, validationSchema),
    defaultValues: initialValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { register, errors, setValue })
      )}
      {debug && <Debug />}
    </form>
  );
};

Form.Checkbox = FieldCheckbox;

Form.Input = FieldInput;

Form.RadioGroup = FieldRadioGroup;

Form.Select = FieldSelect;

Form.Textarea = FieldTextarea;

Form.Toggle = FieldToggle;

Form.FieldFile = FieldFileInput;

Form.DDFile = DDFileInput;

Form.defaultProps = {
  debug: false,
  initialValues: null,
  validationSchema: null,
  yupValidationSchema: null,
  validate: 'onSubmit',
};

Form.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  debug: PropTypes.bool,
  validationSchema: PropTypes.objectOf(PropTypes.object),
  validate: PropTypes.string,
  yupValidationSchema: PropTypes.func,
};

export default Form;
