import Navbar from './components/Navbar/Navbar';

import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import theme from './components/GlobalStyles/Theme';
import { ThemeProvider } from 'styled-components';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
          <Navbar/>
    </ThemeProvider>
  );
}

export default App;
