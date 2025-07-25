import React from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@mantine/carousel/styles.css';

const theme = createTheme({
  colors: {
    brightsun: [
      '#fffbeb',
      '#fef3c7',
      '#fde68a',
      '#fcd34d',
      '#fbbf24',
      '#f59e0b',
      '#d97706',
      '#b45309',
      '#78350f',
      '#461902',
    ],
  },
  primaryColor: 'brightsun',
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>

    </MantineProvider>
  );
}

export default App;
