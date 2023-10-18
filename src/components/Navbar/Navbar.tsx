import { NavbarContainer, StepList, StepButton } from './NavbarStyles';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const stepNumber = [1, 2, 3, 4];
  const location = useLocation();

  let currentStep: number;

  switch (location.pathname) {
    case '/personalinformation':
      currentStep = 1;
      break;
    case '/planselection':
      currentStep = 2;
      break;
    case '/addons':
      currentStep = 3;
      break;
    case '/summary':
      currentStep = 4;
      break;
    default:
      currentStep = 1;
  }

  return (
    <NavbarContainer>
      <StepList>
        {stepNumber.map((stepNumber) => (
          <li key={stepNumber}>
            <StepButton isCurrentStep={currentStep === stepNumber}>{stepNumber}</StepButton>
          </li>
        ))}
      </StepList>
    </NavbarContainer>
  );
};

export default Navbar;
