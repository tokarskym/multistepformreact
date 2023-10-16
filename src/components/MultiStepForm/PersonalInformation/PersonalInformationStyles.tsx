import styled from 'styled-components';

export const FormInput = styled.input`
width: 100%; 
height: auto; 
border-radius: 5px; 
border: 0.5px solid ${(props) => props.theme.colors.lightGray}; 
margin-top: 5px; 
margin-bottom: 10px; 
padding: 10px; 
&:: placeholder {
    color: ${(props) => props.theme.colors.coolGray};
    font-weight: 500;
}
&:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.purplishBlue}; 
}
}
`;
export const FormLabel = styled.label`
  font-size: 12px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.marineBlue};
`;
