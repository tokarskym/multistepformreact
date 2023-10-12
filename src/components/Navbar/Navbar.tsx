import styled from "styled-components"

const NavbarContainer = styled.nav`
width: 100%; 
height: 172px; 
background-image: url('/images/bg-sidebar-mobile.svg'); 
background-size: cover; 
display: flex; 
justify-content: center; 
align-items: center; 
`

const StepList = styled.ul`
display: flex; 
gap: 20px; 
margin-bottom: 50px; 
`

const StepButton = styled.button`
width: 33px; 
height: 33px; 
border-radius: 50%; 
font-weight: 700; 
font-size: 14px; 
color: ${props => props.theme.colors.white}; 
background-color: ${props => props.theme.colors.lightBlue};
border:  ${props => `1px solid ${props.theme.colors.white }`} 

`

const Navbar: React.FC = () => {


    const stepNumber = [1,2,3,4]

    return (
        <NavbarContainer>
            <StepList>
            {stepNumber.map(stepNumber => (
          <li key={stepNumber}>
            <StepButton>
              {stepNumber}
            </StepButton>
          </li>
            ))}
                
            </StepList>
        </NavbarContainer>
    )
}

export default Navbar; 