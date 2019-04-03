import styled from 'styled-components';

const PopoverContentWrapper = styled.div`
  position: relative;
  border: 1px solid #000000;
  padding: 5px;
  background: ${props => (props.wrapperBackground ? props.wrapperBackground : `#FFFFFF`)};
`;

const PopoverContentClose = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  border: 0 none;
  cursor: pointer;
`;

export { PopoverContentWrapper, PopoverContentClose };
