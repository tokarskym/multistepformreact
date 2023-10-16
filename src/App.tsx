import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';

import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import theme from './components/GlobalStyles/Theme';
import { set } from 'react-hook-form';

function App() {
  const [step, setStep] = useState(1);

  const nextStep: () => void = () => {
    setStep((prev) => prev + 1);
  };

  const previousStep: () => void = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar step={step} />
      <MultiStepForm step={step} />
      <Footer nextStep={nextStep} previousStep={previousStep} step={step} />
    </ThemeProvider>
  );
}

export default App;
