import { css } from 'styled-components';

const styles = css`
  display: block;
  width: 100%;
  float: left;
  margin-bottom: -7px;
  ${props =>
    props.showImage
      ? 'background: url(https://image.freepik.com/free-icon/information-circle_318-27255.jpg) no-repeat center / contain;'
      : ''}
  cursor: pointer;
  position: relative;
  &:hover:before {
    content: attr(data-tooltip);
    display: flex;
    justify-content: center;
    width: 200px;
    background: #ddf;
    border: 1px solid #ebebeb;
    padding: 20px;
    bottom: 20px;
    position: absolute;
    border-radius: 10px;
    box-shadow: 0 5px 10px #000;
  }
`;

export default styles;
