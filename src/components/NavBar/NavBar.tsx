import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.main,
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

const NavBar
  = () => {

    return (
      <>

        <AppBar position="fixed">
          <StyledToolbar>
            <MenuItem onClick={() => scrollToSection('hero')}>Home</MenuItem>
            <MenuItem onClick={() => scrollToSection('about')}>About</MenuItem>
            {/*<MenuItem onClick={() => scrollToSection('skills')}>Skills</MenuItem>*/}
            <MenuItem onClick={() => scrollToSection('projects')}>Projects</MenuItem>
          </StyledToolbar>
        </AppBar>
      </>
    )
  }

export default NavBar