import styled from 'styled-components';

const FooterDiv = styled.div<{ oneButton: boolean }>`
  width: auto;
  height: 62px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.oneButton ? 'flex-end' : 'space-between')};
`;

const NextButton = styled.button`
  width: 97px;
  height: 40px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.marineBlue};
  border: none;
  border-radius: 5px;
`;
const ReturnButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.colors.coolGray};
  border: none;
  background-color: transparent;
`;

const ConfirmButton = styled(NextButton)`
  font-weight: 700; 
  background-color: ${(props) => props.theme.colors.purplishBlue}; 
  }
`;

interface FooterProps {
  nextStep: () => void;
  previousStep: () => void;
  step: number;
}

const Footer: React.FC<FooterProps> = ({ nextStep, previousStep, step }) => {
  return (
    <FooterDiv oneButton={step === 1}>
      {step >= 2 && step <= 4 && <ReturnButton onClick={previousStep}> Go Back </ReturnButton>}
      {step >= 1 && step <= 3 && (
        <NextButton type="button" onClick={nextStep}>
          Next Step
        </NextButton>
      )}
      {step === 4 && <ConfirmButton> Confirm </ConfirmButton>}
    </FooterDiv>
  );
};

export default Footer;
