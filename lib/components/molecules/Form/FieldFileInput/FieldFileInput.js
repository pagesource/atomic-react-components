import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '../../../atoms/Input';
import Label from '../../../atoms/Label';
import Button from '../../../atoms/Button';
import styles from './FieldFileInput.style';
import useOpenFileDialog from '../../../../hooks/useOpenFileDialog';

const FieldFileInput = ({
  id,
  className,
  name,
  label,
  onChange,
  onBlur,
  labelProps,
  fieldProps,
  register,
  setValue,
  localeText,
  ...others
}) => {
  const fileInput = React.createRef();
  const { openFileDialog } = useOpenFileDialog();

  useEffect(() => {
    register({ name });
  }, [register]);

  const handleChange = (e) => {
    setValue(name, e.target.files); // you get all the files object here
  };

  return (
    <div className={className}>
      <Label htmlFor={id} {...labelProps}>
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type="file"
        ref={fileInput}
        {...others}
        {...fieldProps}
        onChange={handleChange}
      />
      <Button tertiary type="button" onClick={() => openFileDialog(fileInput)}>
        {localeText.btnTextPrimary}
      </Button>
      <Button primary type="button">
        {localeText.btnTextSecondary}
      </Button>
    </div>
  );
};

FieldFileInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  labelProps: PropTypes.objectOf(PropTypes.object),
  fieldProps: PropTypes.objectOf(PropTypes.object),
  localeText: PropTypes.objectOf(PropTypes.object),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

FieldFileInput.defaultProps = {
  className: 'fieldFileInput',
  labelProps: {},
  fieldProps: {},
  onChange: null,
  onBlur: null,
  localeText: {
    btnTextPrimary: 'Choose File(s)',
    btnTextSecondary: 'Upload...',
  },
};

const StyledFieldFileInput = styled(FieldFileInput)`
  ${styles};
`;

export default StyledFieldFileInput;

export { FieldFileInput as FieldFileInputVanilla };
