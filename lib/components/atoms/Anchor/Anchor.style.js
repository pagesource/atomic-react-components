import { css } from 'styled-components';

export default css`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.linkColorPrimary};
  &:focus {
    outline: 1px dashed ${props => props.theme.colorOutline};
  }

  ${props =>
    (props.secondary
      ? `
        font-weight: ${props.theme.fontSemiBold}
        color: ${props.theme.linkColorSecondary}
      ` : '')};

  &:focus:not(.focus-visible) {
    outline: none;
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
