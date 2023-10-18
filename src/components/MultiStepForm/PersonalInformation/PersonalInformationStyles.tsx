import styled from 'styled-components';

export const FormInput = styled.input<{ isNotValid?: boolean }>`
width: 100%; 
height: auto; 
border-radius: 5px; 
border: ${(props) => (props.isNotValid ? '1px solid #ee374a' : '0.5px solid ' + props.theme.colors.lightGray)}; 
margin-top: 5px; 
margin-bottom: 10px; 
padding: 10px; 
&:: placeholder {
    color: ${(props) => props.theme.colors.coolGray};
    font-weight: 500;
}
&:focus {
    outline: none;
    border: ${(props) => (props.isNotValid ? '1px solid #ee374a' : '1px solid ' + props.theme.colors.purplishBlue)};
}
}
`;
export const FormLabel = styled.label`
  font-size: 14px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.marineBlue};
`;

export const ErrorsLabel = styled.p`
  font-weight: 700;
  color: #ee374a;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
