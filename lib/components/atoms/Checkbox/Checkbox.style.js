import { css } from 'styled-components';

const styles = css`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  & span {
    margin-right: 5px;
  }
`;

export default styles;
