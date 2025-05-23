import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a custom Material-UI theme (optional)
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Default Material-UI blue
    },
    secondary: {
      main: '#dc004e', // Default Material-UI pink
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
   
  </StrictMode>
);
