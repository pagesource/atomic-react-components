import { css } from 'styled-components';

export default css`
  margin: 1rem 1rem;
  .search-box {
    display: flex;
    border-radius: 1.5rem;
    border: var(--border-size-field) solid var(--field-border-primary);
    width: 638px;
    margin: 0 auto;
    height: 50px;
  }

  .search-txt {
    display: inherit;
    flex: auto;
    flex-grow: 2;
    input {
      font-size: 1rem;
      flex-grow: 1;
      border: none;
      background: none;
      outline: none;
      line-height: 2;
    }
  }

  .search-button {
    display: flex;
    overflow: hidden;
  }

  button {
    padding: 0 0.5rem;
    cursor: pointer;
    background: transparent;
  }

  button:hover {
    background-color: transparent;
  }

  .search-icon {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
  }

  .search-mic {
    background: url(images/googlemic.png) 0 0/24px no-repeat;
  }

  .search-loader {
    background: url(images/search-loader.gif) 0 0/24px no-repeat;
    height: 0.5rem;
  }

  .search-btn {
    background: url(images/search.svg) 0 0 no-repeat;
  }

  .search-txt ul {
    position: absolute;
    top: 65px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
    width: 638px;
    margin: 0 auto;
  }
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
