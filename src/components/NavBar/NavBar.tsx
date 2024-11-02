import { AppBar, MenuItem, styled, Toolbar, IconButton } from "@mui/material";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import CountryFlag from 'react-country-flag';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.main,
}));

const NavigationContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: theme.spacing(30),
  flexGrow: 1,
}));

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
};

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
}

const LanguageSelector = () => (
  <>
    <IconButton onClick={() => changeLanguage('pt')}>
      <CountryFlag countryCode="br" svg />
    </IconButton>
    <IconButton onClick={() => changeLanguage('en')}>
      <CountryFlag countryCode="us" svg />
    </IconButton>
  </>
);

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <NavigationContainer>
          <MenuItem onClick={() => scrollToSection('hero')}>{t('nav.home')}</MenuItem>
          <MenuItem onClick={() => scrollToSection('about')}>{t('nav.about')}</MenuItem>
          {/*<MenuItem onClick={() => scrollToSection('skills')}>Skills</MenuItem>*/}
          <MenuItem onClick={() => scrollToSection('projects')}>{t('nav.projects')}</MenuItem>
        </NavigationContainer>
        <LanguageSelector />
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;