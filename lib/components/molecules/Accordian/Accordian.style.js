import styled from 'styled-components';

const AccordianWrapper = styled.div`
  display: block;
  width: 50%;
  margin: 10px 0;
`;

const AccordianHeader = styled.div`
  & {
    display: block;
    background: #66a3ff;
    color: white;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    font-weight: bold;
  }

  &.open,
  &.closed {
    &:after {
      content: '-';
      color: red;
      float: left;
      font-weight: bold;
      padding-right: 5px;
    }
  }

  &.closed {
    &:after {
      content: '+';
    }
  }
`;

const AccordianBody = styled.p`
  & {
    background: #e6f0ff;
    margin: 0;
    padding: 10px;
  }
`;

export { AccordianWrapper, AccordianHeader, AccordianBody };
