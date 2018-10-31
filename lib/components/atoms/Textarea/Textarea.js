/**
 *
 * Textarea
 *
 */
// @flow
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './Textarea.style';

type Props = {
  id?: string,
  className?: string,
  title?: string,
  name?: string,
  placeholder?: string,
  value?: string,
  resize?: string,
};

const Textarea = ({
  id,
  className,
  title,
  name,
  placeholder,
  value,
  resize,
  ...others
}: Props): Node => (
  <textarea
    id={id}
    className={className}
    name={name}
    title={title}
    placeholder={placeholder}
    defaultValue={value}
    resize={resize}
    {...others}
  />
);

Textarea.defaultProps = {
  id: '',
  className: '',
  title: '',
  placeholder: '',
  value: '',
  resize: 'none',
  name: '',
};

export default styled(Textarea)`
  ${styles};
`;
export { Textarea as TextareaVanilla };
