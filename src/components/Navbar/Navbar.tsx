import { NavbarContainer, StepList, StepButton } from './NavbarStyles';

interface NavbarProps {
  step: number;
}

const Navbar: React.FC<NavbarProps> = ({ step }) => {
  const stepNumber = [1, 2, 3, 4];

  return (
    <NavbarContainer>
      <StepList>
        {stepNumber.map((stepNumber) => (
          <li key={stepNumber}>
            <StepButton isCurrentStep={step === stepNumber}>{stepNumber}</StepButton>
          </li>
        ))}
      </StepList>
    </NavbarContainer>
  );
};

export default Navbar;
