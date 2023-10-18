import { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar/Navbar';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';

import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import theme from './components/GlobalStyles/Theme';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/personalinformation" />} />
          <Route path="/personalinformation" element={<MultiStepForm step={1} />} />
          <Route path="/planselection" element={<MultiStepForm step={2} />} />
          <Route path="/addons" element={<MultiStepForm step={3} />} />
          <Route path="/summary" element={<MultiStepForm step={4} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
