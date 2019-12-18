// @flow

import React from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldToggle.style';
import type { Props } from './types';

import Label from '../../../atoms/Label/Label';
import Input from '../../../atoms/Input/Input';

const FieldToggle = ({
  id,
  name,
  disabled,
  label,
  indicatorOn,
  indicatorOff,
  className,
  intialToggleState,
  toggleCheckboxClick,
  ...otherProps
}: Props): Node => {
  const [toggleOn, handleToggle] = React.useState(intialToggleState);

  return (
    <div className={className}>
      <Label htmlFor={id} className="label-name">
        {label}
      </Label>
      <Field id={id} name={name}>
        {({ field, form }) => {
          const { handleChange } = form;
          return (
            <div>
              <Label htmlFor={id}>
                <Input
                  className="toggle-input"
                  id={id}
                  name={name}
                  type="checkbox"
                  checked={toggleOn}
                  value={toggleOn}
                  disabled={disabled}
                  onClick={e => {
                    handleChange(e);
                    handleToggle(!toggleOn);
                    toggleCheckboxClick(toggleOn);
                  }}
                  {...otherProps}
                  {...field}
                />
                <span className="slider" />
              </Label>
              <span className="toggle-label">{toggleOn ? indicatorOn : indicatorOff}</span>
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={FieldError} />
    </div>
  );
};

FieldToggle.defaultProps = {
  disabled: false,
  className: 'toggle-container',
  indicatorOn: 'On',
  indicatorOff: 'Off',
  label: 'Toggle',
  intialToggleState: false,
};

export default styled(FieldToggle)`
  ${styles};
`;

export { FieldToggle as FieldToggleVanilla };
