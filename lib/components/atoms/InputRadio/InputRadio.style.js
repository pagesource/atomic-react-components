import { css } from 'styled-components';

const styles = css`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  & > span {
    padding-top: 2px;
  }
  ${props => (props.showLabelBeforeInput ? `
    display: flex;
    justify-content: space-between;
    & > div {
      order: 1;
    }
  ` : `
    & > div {
      margin-right: 5px;
    }
  `)}
`;

export default styles;
