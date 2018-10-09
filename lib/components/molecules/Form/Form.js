// @flow
import React from 'react';
import { Formik, Form as FormWrapper } from 'formik';
import type { Node } from 'react';
import Debug from './Debug';
import Input from './Input';
import Select from './Select';


type Props = {
  className?: string,
  action: string,
  initialValues ?: any,
  children: Node,
  onSubmit: Function,
  debug ?: boolean,
  validationSchema ?: Object,
  validate ?: Function
};

class Form extends React.PureComponent<Props> {
  static defaultProps = {
    debug: false,
    className: '',
    initialValues: {},
    validationSchema: {},
    validate: () => false,
  };

  static Input = Input;

  static Select = Select;

  render() {
    const {
      action,
      className,
      onSubmit,
      initialValues,
      children,
      debug,
      validationSchema,
      validate,
      ...others
    } = this.props;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validate={validate}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        render={() => (
          <FormWrapper {...others}>
            {children}
            {debug && <Debug />}
          </FormWrapper>
        )}
      />
    );
  }
}

export default Form;
