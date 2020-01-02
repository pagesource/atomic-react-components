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
  .skeleton {
    div {
      display: inline-block;
      background: linear-gradient(-90deg, #ededed 0%, #e1e1e1 50%, #ededed 100%);
      background-size: 400% 400%;
      animation: pulse 1.2s ease-in-out infinite;
      margin: ${props => (props.gutter ? props.gutter : '0')};
      .skeletalLine {
        border-radius: 5px;
        height: ${props => (props.height ? props.height : '18px')};
        width: ${props => (props.width ? props.width : '100%')};
      }
      .skeletalCircle {
        border-radius: ${props => (props.radius ? props.radius : '50%')};
        height: ${props => (props.height ? props.height : '100px')};
        width: ${props => (props.height ? props.height : '100px')};
      }
    }
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
