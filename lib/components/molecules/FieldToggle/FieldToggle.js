// @flow
/**
 *
 * FieldToggle
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components';

import styles from './FieldToggle.style';
import type { Props } from './types';

import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

const FieldToggle = ({
  id,
  name,
  disabled,
  labelName,
  labelOn,
  labelOff,
  className,
  ...otherProps
}: Props): Node => {
  const [toggleOn, handleToggle] = useState(false);

  return (
    <div className={className}>
      <Label htmlFor={id} className="labelName">
        {labelName}
      </Label>
      <div>
        <Label htmlFor={id}>
          <Input
            className="toggleInput"
            id={id}
            name={name}
            type="checkbox"
            disabled={disabled}
            onChange={() => {
              handleToggle(!toggleOn);
            }}
            {...otherProps}
          />
          <span className="slider" />
        </Label>
        <Label className="toggleLabel">{toggleOn ? labelOn : labelOff}</Label>
      </div>
    </div>
  );
};

FieldToggle.defaultProps = {
  id: 'toggletest',
  name: 'toggleCheckbox',
  disabled: false,
  className: 'container',
  labelOn: 'On',
  labelOff: 'Off',
  labelName: 'Toggle',
};

export default styled(FieldToggle)`
  ${styles};
`;

export { FieldToggle as FieldToggleVanilla };
