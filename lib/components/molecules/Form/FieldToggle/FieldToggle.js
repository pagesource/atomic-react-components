import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'formik';
import styles from './FieldToggle.style';

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
}) => {
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

FieldToggle.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  inheritedStyles: PropTypes.string,
  labelName: PropTypes.string.isRequired,
  indicatorOn: PropTypes.string,
  indicatorOff: PropTypes.string,
  displayIndicators: PropTypes.bool,
  intialToggleState: PropTypes.bool,
  onChange: PropTypes.func,
  handleToggleCallback: PropTypes.func.isRequired,
  label: PropTypes.string,
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
  onChange: () => {},
};

const StyledFieldToggle = styled(FieldToggle)`
  ${styles};
`;

export default StyledFieldToggle;

export { FieldToggle as FieldToggleVanilla };
