// @flow

import React, { useState } from 'react';
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
  labelOn,
  labelOff,
  className,
  toggleValue,
  toggleCheckboxClick,
  ...otherProps
}: Props): Node => {
  const [toggleOn, handleToggle] = useState(toggleValue);

  return (
    <div className={className}>
      <Label htmlFor="FieldToggle" className="labelName">
        {label}
      </Label>
      <Field id="field-toggle" name="field-toggle">
        {({ field, form }) => {
          const { handleChange } = form;
          return (
            <div>
              <Label htmlFor="field-toggle">
                <Input
                  className="toggleInput"
                  id="field-toggle"
                  name="field-toggle"
                  type="checkbox"
                  checked={toggleOn}
                  disabled={disabled}
                  onClick={e => {
                    handleChange(e);
                    handleToggle(!toggleOn);
                    toggleCheckboxClick(toggleOn);
                    if (typeof onClick === 'function');
                  }}
                  {...otherProps}
                  {...field}
                />
                <span className="slider" />
              </Label>
              <span className="toggleLabel">{toggleOn ? labelOn : labelOff}</span>
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={FieldError} />
    </div>
  );
};

FieldToggle.defaultProps = {
  id: 'toggletest',
  name: 'field-toggle',
  disabled: false,
  className: 'container',
  labelOn: 'On',
  labelOff: 'Off',
  label: 'Toggle',
  toggleValue: false,
};

export default styled(FieldToggle)`
  ${styles};
`;

export { FieldToggle as FieldToggleVanilla };
