import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 86%;
  height: auto;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
  position: relative;
  top: -60px;
  box-shadow: 5px 5px 15px rgb(188 192 192 / 50%);
`;

export const FormHeader = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.marineBlue};
  margin-bottom: 10px;
`;

export const FormParagraph = styled.p`
  color: ${(props) => props.theme.colors.coolGray};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`;
