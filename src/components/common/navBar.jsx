import React from 'react';
import { Container } from '@mui/material';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
            <Container position="fixed" color="transparent">
              <h1>Expense tracker</h1>
            </Container>
    );
};

export default NavBar;
