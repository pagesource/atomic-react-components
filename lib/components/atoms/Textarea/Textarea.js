/**
 *
 * Textarea
 *
 */
// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import styles from './Textarea.style';

type Props = {
  id: string,
  className?: string,
  elementLocator?: string,
  title?: string,
  name: string,
  placeholder?: string,
  value?: string,
  resize?: string,
  ref: ?HTMLInputElement,
};

const Textarea = React.forwardRef(
  (
    { id, className, elementLocator, title, name, placeholder, value, resize, ...others }: Props,
    ref
  ): Node => (
    <textarea
      id={id}
      className={className}
      name={name}
      title={title}
      placeholder={placeholder}
      defaultValue={value}
      resize={resize}
      ref={ref}
      data-locator={elementLocator || `textarea-input-${name}-${id}`}
      {...others}
    />
  )
);

Textarea.defaultProps = {
  className: '',
  elementLocator: '',
  title: '',
  placeholder: '',
  value: '',
  resize: 'none',
};

const StyledTextArea: ComponentType<Props> = styled(Textarea)`
  ${styles};
`;

export default StyledTextArea;
export { Textarea as TextareaVanilla };
