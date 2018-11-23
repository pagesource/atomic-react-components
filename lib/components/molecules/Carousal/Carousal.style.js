import { css } from 'styled-components';

export default css`
  min-height: 100px;
  overflow: hidden;

  .slider-container {
    position: relative;
  }

  .arrow {
    background: ${props => props.theme.containerShadowPrimary};
    color: ${props => props.theme.textColorPlaceholder};
    position: absolute;
    top: 50%;
    margin-top: -24px;
    width: 48px;
    z-index: 1;

    &.right {
      right: 0;
      margin-left: -48px;
    }
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
