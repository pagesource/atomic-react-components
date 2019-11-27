import { css } from 'styled-components';

const styles = css`
  height: auto;
  border-radius: 0.2rem;
  ${props => `
      ${props.theme.colors.FIELD_DEFAULT};
      padding: 0.6 ${props.theme.spacing.unit2};
  `};

  /* Disabled*/
  ${props => props.disabled && `${props.theme.colors.FIELD_DISABLED}`};

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
