import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { mobile } from "../responsive";
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ margin: "10px", padding: "10px" })}

`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

export default function MDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{ width: "60vw" }}
        >

            <SearchContainer>
                <Input placeholder="Search" />
                <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
            <Divider />

            <List>
                <ListItem button>
                    <ListItemIcon>
                        <AppRegistrationIcon />
                    </ListItemIcon>
                    <ListItemText primary="Register" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                </ListItem>
            </List>
            <Divider />

            <List>
                <ListItem button>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="LogOut" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
