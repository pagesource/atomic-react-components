import { css } from 'styled-components';

export default css`
  margin: 5px 5px;
  .search-box,
  .search-list {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background: #fff;
    border: 1px solid #dfe1e5;
    height: 39px;
    width: 638px;
    border-radius: 24px;
    z-index: 3;
    height: 44px;
    margin: 0 auto;
  }
  .search-list {
    border-radius: 5px;
    margin-top: 10px;
    padding-left: 12px;
  }

  .search-txt {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding-left: 10px;
    color: black;
    font-size: 16px;
    transition: 0.4s;
    grid-column: 1/7;
  }

  .search-button {
    overflow: hidden;
  }

  button:hover {
    background-color: transparent;
  }

  button {
    min-height: 42px;
    padding: 0 5px;
    float: left;
    cursor: pointer;
    background: transparent;
  }

  .search-icon {
    display: block;
    width: 24px;
    height: 24px;
  }

  .search-mic {
    background: url(images/googlemic.png) 0 0/24px no-repeat;
  }

  .search-loader {
    background: url(images/search-loader.gif) 0 0/24px no-repeat;
    height: 8px;
  }

  .search-btn {
    background: url(images/search.svg) 0 0 no-repeat;
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
