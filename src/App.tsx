import React from 'react';
import { ThemeProvider } from 'styled-components';
import { renderRouter } from './routes/renderRouter';
import { theme } from './style/theme';
import { GlobalContextProvider } from './context/global-context-provider';

function App() {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>{renderRouter()}</ThemeProvider>
    </GlobalContextProvider>
  );
}

export default App;
