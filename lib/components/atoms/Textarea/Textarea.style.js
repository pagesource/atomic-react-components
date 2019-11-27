import { css } from 'styled-components';

const styles = css`
  margin: 0;
  outline: 0;
  line-height: 1.2rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  ${props => `
      ${props.theme.colors.FIELD_DEFAULT};
  `};
  resize: ${props => props.resize || 'none'};
  width: 100%;
  height: 100px;

  /* Disabled*/
  ${props => props.disabled && `${props.theme.colors.FIELD_DISABLED}`};

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
