import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar";
import CreatePage from "./pages/CreatePage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <NavBar isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <CreatePage />
    </ThemeProvider>
  );
}

export default App;