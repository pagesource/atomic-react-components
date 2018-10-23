import { css } from 'styled-components';

const styles = css`
  display: flex;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  & > span:last-of-type {
    padding-top: 2px;
  }
  ${props => (props.showLabelBeforeInput ? `
    justify-content: space-between;
    & > span:first-of-type {
      order: 1;
    }
  ` : `
    & > span:first-of-type {
      margin-right: 5px;
    }
  `)}
`;

export default styles;
