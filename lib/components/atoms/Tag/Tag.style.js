import { css } from 'styled-components';

export default css`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.UNIT_1};

  ${(props) => `
    ${props.theme.border.TAG};
    ${props.theme.colors.TEXT_DEFAULT};
    ${props.theme.colors.TAG_BACKGROUND};
  `}

  button[variation='icon-only'] {
    min-height: initial;
  }

  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
