import { ShoppingCart } from "@mui/icons-material";
import { AppBar, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";


import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';

import { NavLink } from "react-router-dom";

interface props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'contact', path: '/contact'},
    {title: 'about', path: '/about'},
] 
const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
] 
const navStyles = {
    color: 'inherit', 
    typography: 'h6',
    textDecoration: 'none',
    '&:hover':{
        color: 'grey.500'
    },
    '&.active':{
        color: 'text.secondary'
    }
}
export default function Header({darkMode, handleThemeChange}: props) {
    return(
        <AppBar position="static" sx={{mb: 4}}>

            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems='center'>
                    <Typography variant="h6" component={NavLink} 
                        to = '/'
                        exact
                        sx = {navStyles}
                        >
                        Re-store
                    </Typography>
                    
                    <Switch value="checkedA" checked= {darkMode} onChange = {handleThemeChange} />  
             
                </Box>
                
                    <List sx={{display: 'flex'}}>
                        {midLinks.map(({title, path}) => (

                                <ListItem
                                    component = {NavLink}
                                    to = {path}
                                    key = {path}
                                    sx = {navStyles} 
                                    >
                                    {title.toUpperCase()}
                                    
                                </ListItem>


                        ))} 
                    </List>

                <Box display='flex' alignItems='center'>
                    <IconButton size='large' color='inherit' >
                            <Badge badgeContent={4} color='secondary'>
                                <ShoppingCart/>
                            </Badge>

                    </IconButton>
                    <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}) => (

                                <ListItem
                                    component = {NavLink}
                                    to = {path}
                                    key = {path}
                                    sx = {navStyles}
                                    >
                                    {title.toUpperCase()}
                                    
                                </ListItem>


                        ))}


                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}