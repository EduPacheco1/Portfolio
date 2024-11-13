import { AppBar, MenuItem, styled, Toolbar, IconButton, Drawer, Box, useTheme, useMediaQuery } from "@mui/material";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import CountryFlag from 'react-country-flag';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.main,
  padding: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

const NavigationContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: "space-evenly",
  alignItems: "center",
  flexGrow: 1,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    gap: theme.spacing(10),
  },
  [theme.breakpoints.up('lg')]: {
    gap: theme.spacing(30),
  },
}));

const MobileNavigationContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  width: '250px',
  '& .MuiMenuItem-root': {
    padding: theme.spacing(2),
    justifyContent: 'center',
  },
}));

const LanguageSelectorContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    '& .MuiIconButton-root': {
      padding: theme.spacing(1),
    },
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    marginRight: theme.spacing(2),
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '2px',
    bottom: '0',
    left: '50%',
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
    left: '0',
  },
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
};

const LanguageSelector = () => (
  <LanguageSelectorContainer>
    <IconButton size="small" onClick={() => changeLanguage('pt')}>
      <CountryFlag countryCode="br" svg style={{ width: '1.5em', height: '1.5em' }}/>
    </IconButton>
    <IconButton size="small" onClick={() => changeLanguage('en')}>
      <CountryFlag countryCode="us" svg style={{ width: '1.5em', height: '1.5em' }}/>
    </IconButton>
  </LanguageSelectorContainer>
);

const NavBar = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = (id: string) => {
    scrollToSection(id);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const navigationItems = [
    { id: 'hero', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
  ];

  const drawer = (
    <MobileNavigationContainer>
      <Box display="flex" justifyContent="flex-end" p={1}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      {navigationItems.map((item) => (
        <MenuItem 
          key={item.id} 
          onClick={() => handleMenuItemClick(item.id)}
        >
          {item.label}
        </MenuItem>
      ))}
      <Box display="flex" justifyContent="center" mt={2}>
        <LanguageSelector />
      </Box>
    </MobileNavigationContainer>
  );

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <MenuButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </MenuButton>

        <NavigationContainer sx={{ marginLeft: { md: '5%' } }}>
          {navigationItems.map((item) => (
            <StyledMenuItem 
              key={item.id}
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.label}
            </StyledMenuItem>
          ))}
        </NavigationContainer>

        {!isMobile && <LanguageSelector />}

        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
        >
          {drawer}
        </Drawer>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;