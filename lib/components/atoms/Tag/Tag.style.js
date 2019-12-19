import { css } from 'styled-components';

export default css`
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};

  display: inline-flex;
  align-items: center;

  ${props => `
    ${props.theme.border.TAG};
    ${props.theme.colors.TEXT_DEFAULT};
    ${props.theme.colors.BG_DEFAULT};
  `}

  .text-content {
    padding: ${props => props.theme.spacing.UNIT_1};
  }
`;
