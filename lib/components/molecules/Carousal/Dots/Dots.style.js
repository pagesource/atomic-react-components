import { css } from 'styled-components';

export default css`
  text-align: center;
  .dot {
    width: 10px;
    height: 10px;
    min-height: 10px;
    border-radius: 50%;
    border: 1px solid;
    margin-right: 10px;
    padding: 0;
  }
  .thumbnail {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0;
    line-height: 0;
    div {
      width: 85px;
      height: 85px;
      margin-right: 10px;
      transition: border 0.15s ease-in;
      &.active-slide {
        border: 3px solid #333;
        padding: 2px;
      }
      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
