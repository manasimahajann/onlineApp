import { Container, CssBaseline, Typography } from "@mui/material"; 
import Catalog from "../../feature/catalog/catalog"; 
import Header from "./Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const darkTheme = createTheme({
    palette: {
      mode: paletteType,
      background:{
        default: paletteType ==='light' ? '#eaeaea':'#121212'
      }
    },
  })  
  
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={darkTheme}> 
    <CssBaseline/>
      <Header darkMode = {darkMode} handleThemeChange = {handleThemeChange}/>
      <Container>
        <Catalog /> 
      </Container>
 
    </ThemeProvider>
    
  );
}

export default App;
