import { css } from 'styled-components';

const styles = css`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  ${props => (props.showLabelBeforeInput ? `
    display: flex;
    justify-content: space-between;
  ` : '')}
  & span {
    margin-right: 5px;
  }
`;

export default styles;
