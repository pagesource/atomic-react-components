/* eslint-disable react/prop-types */
// @flow
/**
 *
 * Toggle
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { InputVanilla as Input } from '../../atoms/Input';
import Label from '../../atoms/Label';

import styles from './Toggle.style';

const Toggle = ({
  id,
  name,
  type,
  disabled,
  className,
  children,
  labelProps,
  labelOn,
  labelOff,
  labelName,
  ...otherProps
}) => {
  const [toggleOn, handleToggle] = useState(false);

  let toggleLabel = '';
  if (toggleOn) {
    toggleLabel = labelOn;
  } else toggleLabel = labelOff;

  return (
    <div className={className}>
      <span className="labelName">{labelName}</span>
      <section>
        <Label htmlFor={id} {...labelProps}>
          <Input
            id={id}
            name={name}
            type={type}
            disabled={disabled}
            onClick={() => {
              handleToggle(!toggleOn);
            }}
            {...otherProps}
          />
          <span className="slider round" />
        </Label>
        <span className="toggleLabel">{toggleLabel}</span>
      </section>
      {children}
    </div>
  );
};

Toggle.defaultProps = {
  id: 'toggletest1',
  name: 'toggleCheckbox',
  type: 'checkbox',
  disabled: false,
  className: 'toggleSwitch',
  children: '',
  labelName: 'Toggle Label',
  labelOn: 'On',
  labelOff: 'Off',
};

export default styled(Toggle)`
  ${styles};
`;

export { Toggle as ToggleVanilla };
