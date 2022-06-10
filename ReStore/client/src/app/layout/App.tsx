import { Container, CssBaseline, Typography } from "@mui/material"; 
import Catalog from "../../feature/catalog/catalog"; 
import Header from "./Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from "react";
import { Route } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import ProductDetails from "../../feature/catalog/ProductDetails"; 
import ContactPage from "../../feature/contact/ContactPage";
import AboutPage from "../../feature/about/AboutPage";
import HomePage from "../../feature/home/HomePage";

import 'react-toastify/dist/ReactToastify.css'; 



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
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
    <ThemeProvider theme={theme}> 
    <ToastContainer position= 'bottom-right' hideProgressBar />
    <CssBaseline/>
      <Header darkMode = {darkMode} handleThemeChange = {handleThemeChange}/>
      <Container>
        <Route exact path = '/'  component={HomePage}  /> 
        <Route exact path = '/contact' component={ContactPage} /> 
        <Route exact path = '/about' component={AboutPage} /> 
        <Route exact path = '/catalog' component={Catalog} /> 
        <Route exact path = '/catalog/:id' component={ProductDetails} /> 
      </Container>
 
    </ThemeProvider>
    
  );
}

export default App;
