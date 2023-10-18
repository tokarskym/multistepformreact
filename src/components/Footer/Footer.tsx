import styled, { keyframes, css } from 'styled-components';
import { FieldKeys } from '../MultiStepForm/MultiStepForm';
import { useState } from 'react';
import { error } from 'console';

const FooterDiv = styled.div<{ oneButton: boolean }>`
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.oneButton ? 'flex-end' : 'space-between')};
  position: fixed;
  bottom: 0;
`;

const flashBlue = keyframes`
  0%, 100% { background-color: ${(props) => props.theme.colors.marineBlue}; }
  50% { background-color: transparent; }
`;

const transitionToGray = keyframes`
  from { background-color: ${(props) => props.theme.colors.marineBlue}; }
  to { background-color: #ee374a }
`;

const NextButton = styled.button<{ isBlocked?: boolean }>`
  width: 97px;
  height: 40px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => (props.isBlocked ? props.theme.colors.coolGray : props.theme.colors.marineBlue)};
  border: none;
  border-radius: 5px;

  ${(props) =>
    props.isBlocked &&
    css`
      animation: ${flashBlue} 0.3s 3, ${transitionToGray} 1s forwards 0.9s;
    `}
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
  validateForm: (fields: FieldKeys[]) => Promise<boolean>;
  errors: any;
}

const Footer: React.FC<FooterProps> = ({ validateForm, nextStep, previousStep, step }) => {
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const handleNext = async () => {
    if (step === 1) {
      const isValid = await validateForm(['name', 'email', 'phone']);
      if (isValid) {
        setIsBlocked(false);
        nextStep();
      } else {
        setIsBlocked(true);
      }
    } else if (step === 2) {
      const isValid = await validateForm(['selectedPlan']);
      if (isValid) {
        setIsBlocked(false);
        nextStep();
      } else {
        setIsBlocked(true);
      }
    } else if (step === 3) {
      const isValid = await validateForm(['addOns']);
      if (isValid) {
        nextStep();
      } else {
        console.log('warn');
      }
    }
  };

  return (
    <FooterDiv oneButton={step === 1}>
      {step >= 2 && step <= 4 && <ReturnButton onClick={previousStep}> Go Back </ReturnButton>}
      {step >= 1 && step <= 3 && (
        <NextButton isBlocked={isBlocked} type="button" onClick={handleNext}>
          Next Step
        </NextButton>
      )}
      {step === 4 && <ConfirmButton> Confirm </ConfirmButton>}
    </FooterDiv>
  );
};

export default Footer;
