import { AppBar, Typography, Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
}));

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Typography align="left">
                    © {currentYear} Eduardo Pacheco. All rights reserved.
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
            </StyledToolbar>
        </AppBar>
    );
};

export default Footer;