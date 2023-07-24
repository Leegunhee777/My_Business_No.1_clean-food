import { ThemeProvider } from 'styled-components';
import { renderRouter } from './routes/renderRouter';
import { GlobalContextProvider } from './context/global-context-provider';
import { theme } from './style/theme';

function App() {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>{renderRouter()}</ThemeProvider>
    </GlobalContextProvider>
  );
}

export default App;
