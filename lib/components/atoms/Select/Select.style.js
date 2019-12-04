import { css } from 'styled-components';

const styles = css`
  height: auto;
  ${props => `
    ${props.theme.colors.FIELD_DEFAULT};
    ${props.theme.border.FIELD_PRIMARY};
    ${props.theme.typography.FONT_FIELD};
    padding: ${props.theme.spacing.unit1} ${props.theme.spacing.unit2};
  `};

  /* Disabled*/
  ${props =>
    props.disabled
      ? `
      ${props.theme.colors.FIELD_DISABLED};
      ${props.theme.border.FIELD_DISABLED};
    `
      : ''};

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
