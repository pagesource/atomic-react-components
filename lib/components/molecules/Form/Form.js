// @flow
import React from 'react';
import { useForm } from 'react-hook-form';
import type { Node } from 'react';
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

type Props = {
  initialValues?: any,
  children: Node,
  onSubmit: Function,
  debug?: boolean,
  validationSchema?: Object | null,
  validate?: String,
  yupValidationSchema?: Function | null,
};

const Form = ({
  onSubmit,
  initialValues,
  children,
  debug,
  validate,
  validationSchema,
  yupValidationSchema,
}: Props) => {
  const getSchema = () => {
    if (yupValidationSchema) return yupValidationSchema;
    return validationSchema ? buildSchema(validationSchema) : null;
  };
  const { handleSubmit, register, errors, setValue } = useForm({
    mode: validate,
    validationSchema: getSchema(yupValidationSchema, validationSchema),
    defaultValues: initialValues,
  });
  const childrenWithProps = children[0].props.children.map((child) => {
    return React.cloneElement(child, { register, errors, setValue });
  });
  childrenWithProps.push(children[1]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {childrenWithProps}
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

export default Form;
