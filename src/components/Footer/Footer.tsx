import { AppBar, Typography, Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
}));

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Typography align="left">
                    © {currentYear} Eduardo Pacheco. {t('footer.right')}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
            </StyledToolbar>
        </AppBar>
    );
};

export default Footer;