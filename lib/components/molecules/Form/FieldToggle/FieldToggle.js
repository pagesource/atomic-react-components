// @flow

import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
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
  inheritedStyles,
  displayIndicators,
  intialToggleState,
  handleToggleCallback,
  ...otherProps
}: Props): Node => {
  const [toggle, handleToggle] = React.useState(intialToggleState);

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
                  checked={toggle}
                  value={toggle}
                  disabled={disabled}
                  onClick={(e) => {
                    const updatedToggleState = !toggle;
                    handleChange(e);
                    handleToggle(updatedToggleState);
                    if (typeof handleToggleCallback === 'function')
                      handleToggleCallback(updatedToggleState);
                  }}
                  {...otherProps}
                  {...field}
                />
                <span className="slider" />
              </Label>
              {displayIndicators && (
                <span className="toggle-label">{toggle ? indicatorOn : indicatorOff}</span>
              )}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

FieldToggle.defaultProps = {
  disabled: false,
  className: 'toggle-container',
  inheritedStyles: '',
  indicatorOn: 'On',
  indicatorOff: 'Off',
  label: 'Toggle',
  intialToggleState: false,
  displayIndicators: true,
};

const StyledFieldToggle: ComponentType<Props> = styled(FieldToggle)`
  ${styles};
`;

export default StyledFieldToggle;

export { FieldToggle as FieldToggleVanilla };
