import styled, { css } from 'styled-components';

const styles = css`
  header {
    position: fixed;
    top: 0;
    width: 100vw;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: ${(props) => props.elmRef.current != null && `${props.elmRef.current.offsetHeight}px`};
`;

export default styles;
