import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 172px;
  background-image: url('/images/bg-sidebar-mobile.svg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepList = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
`;

export const StepButton = styled.button<{ isCurrentStep: boolean }>`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => (props.isCurrentStep ? props.theme.colors.marineBlue : props.theme.colors.white)};
  background-color: ${(props) => (props.isCurrentStep ? props.theme.colors.lightBlue : 'transparent')};
  border: ${(props) => (props.isCurrentStep ? 'none' : `1px solid ${props.theme.colors.white}`)};
`;
