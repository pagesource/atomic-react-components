import { css } from 'styled-components';

const styles = css`
  margin: 0;
  outline: 0;
  line-height: 1.2rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  background-color: ${props => props.theme.fieldBackgroundColor};
  border: 1px solid ${props => props.theme.fieldBorderColor};
  color: ${props => props.theme.fieldTextColor};

  /* Disabled*/
  ${props =>
    props.disabled
      ? `
      background-color: ${props.theme.fieldBackgroundDisabledColor};
      border-color: ${props.theme.fieldBorderDisabledColor};
    `
      : ''};

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
