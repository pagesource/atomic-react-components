import { css } from 'styled-components';

const styles = css`
  ${props => `
    ${props.theme.colors.FIELD_DEFAULT};
    ${props.theme.border.FIELD_PRIMARY};
    ${props.theme.typography.FONT_FIELD};
    padding: ${props.theme.spacing.UNIT_1} ${props.theme.spacing.UNIT_2};
  `};
  resize: ${props => props.resize || 'none'};
  width: 100%;
  height: 100px;

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
