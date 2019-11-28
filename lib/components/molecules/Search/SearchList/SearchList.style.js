import { css } from 'styled-components';

export default css`
  .search-list {
    background: #fff;
    display: flex;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    width: 638px;
    border-radius: 24px;
    z-index: 3;
    height: 44px;
    margin: 0 auto;
    border-radius: 5px;
    margin-top: 10px;
    line-height: 40px;
    padding-left: 12px;
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
