import { css } from 'styled-components';

const StickyBarStyles = css`
  display: flex;
  flex-direction: ${props => (props.listDirection ? props.listDirection : 'column')};
  ${props =>
    `${
      props.horizontalAlign === 'left' || props.horizontalAlign === 'right' ? 'top' : 'left'
    }`}: ${props => (props.verticalAlign ? props.verticalAlign : `20%`)};
  ${props => `${props.horizontalAlign ? props.horizontalAlign : 'left'}`}: 0;
  position: fixed;
  width: ${props => (props.width ? props.width : 'auto')};
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
  overflow: auto;
  max-height: 100%;
`;

export default StickyBarStyles;
