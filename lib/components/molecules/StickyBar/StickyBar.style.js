import { css } from 'styled-components';

const StickyBarStyles = css`
  display: flex;
  flex-direction: ${props => (props.listDirection ? props.listDirection : 'column')};
  top: ${props => (props.verticalAlign ? props.verticalAlign : `50%`)};
  ${props => `${props.horizontalAlign}`}: 0;
  position: fixed;
  width: ${props => (props.width ? props.width : 'auto')};

  li {
    width: 100%;
    &:hover {
      width: 110%;
    }
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default StickyBarStyles;
