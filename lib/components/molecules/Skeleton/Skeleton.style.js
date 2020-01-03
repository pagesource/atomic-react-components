import { css } from 'styled-components';

export default css`
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  div {
    display: inline-block;
    background: linear-gradient(-90deg, #ededed 0%, #e1e1e1 50%, #ededed 100%);
    background-size: 400% 400%;
    animation: pulse 1.2s ease-in-out infinite;
    &.skeletalLine {
      border-radius: 5px;
      height: ${props => (props.lineHeight ? props.lineHeight : '18px')};
      width: ${props => (props.lineWidth ? props.lineWidth : '100%')};
      margin: ${props => (props.lineGutter ? props.lineGutter : '0')};
    }
    &.skeletalCircle {
      border-radius: ${props => (props.circleRadius ? props.circleRadius : '50%')};
      height: ${props => (props.circleWidth ? props.circleWidth : '100px')};
      width: ${props => (props.circleWidth ? props.circleWidth : '100px')};
      margin: ${props => (props.circleGutter ? props.circleGutter : '0')};
    }
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
