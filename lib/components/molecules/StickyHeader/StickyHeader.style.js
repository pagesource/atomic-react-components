import styled, { css } from 'styled-components';

const styles = css`
  .content {
    position: fixed;
    top: ${(props) =>
      props.defaultTopHeight !== undefined ? `${props.defaultTopHeight}px` : '0px'};
    width: inherit;
  }
`;

export const Wrapper = styled.div`
  height: ${(props) => props.elmRef.current != null && `${props.elmRef.current.offsetHeight}px`};
  width: ${(props) => props.elmRef.current != null && `${props.elmRef.current.offsetWidth}px`};
`;

export default styles;
