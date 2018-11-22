import { css } from 'styled-components';

export default css`
  ${props =>
    !props.isVerticalView
      ? `.panels-wrap{ border-top: 1px solid ${props.theme.borderColorSecondary};}`
      : ''};
  ${props =>
    props.isVerticalView
      ? `.panels-wrap{ border-left: 1px solid ${props.theme.borderColorSecondary};}`
      : ''};
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
