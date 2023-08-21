import React from 'react';
import styled from 'styled-components';
import colors from '../utilities/cssColors';

const StyledButton = styled.button`
  font-size: 1em;
  padding: 1em;
  margin: .5em;
  border: 2px solid ${colors.grey};
  background: ${({ backgroundcolor }) => backgroundcolor || colors.paleBlue};
  &:hover {
    background: ${colors.darkBlue};
    color: ${colors.paleBlue};
  };
`

const Button = ({onClick, text, background}) => {
  return ( 
    <StyledButton onClick={onClick} backgroundcolor={background}> {text} </StyledButton>
   );
}
 
export default Button;