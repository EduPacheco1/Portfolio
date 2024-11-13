import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  }
}));

const Content = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  }
}));

const Header = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(2),
    fontSize: "2rem"
  }
}));

const ExperienceBox = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(2),
  border: `2px solid ${theme.palette.primary.contrastText}`,
  textAlign: "center",
  height: "100%",
  minHeight: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(1, 0),
  }
}));

const Divider = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  overflow: "hidden",
  whiteSpace: "nowrap",
  textAlign: "center",
  "& span": {
    display: "inline-block",
    width: "100%",
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    }
  }
}));

const About = () => {
  const { t } = useTranslation();

  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Content>
          <Header variant="h2" align="center" gutterBottom>
            {t('nav.about2')}
          </Header>

          <Box sx={{ mt: 4, mb: 4 }}>
            <Grid 
              container 
              spacing={2} 
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid item xs={12} sm={6} md={5} lg={4}>
                <ExperienceBox>
                  <Typography 
                    variant="h6" 
                    sx={{ mb: 2 }}
                  >
                    {t('about.exp')}
                  </Typography>
                  <Typography variant="body2">
                    {t('about.descexp1')}
                  </Typography>
                </ExperienceBox>
              </Grid>
              
              <Grid item xs={12} sm={6} md={5} lg={4}>
                <ExperienceBox>
                  <Typography 
                    variant="h6" 
                    sx={{ mb: 2 }}
                  >
                    {t('about.edu')}
                  </Typography>
                  <Typography variant="body2">
                    {t('about.descexp2')}
                  </Typography>
                </ExperienceBox>
              </Grid>
            </Grid>
          </Box>

          <Typography 
            variant="body1" 
            align="center" 
            sx={{ 
              mt: 4,
              px: { xs: 2, sm: 4, md: 6 }
            }}
          >
            {t('about.descexp3')}
          </Typography>

          <Typography 
            variant="body1" 
            align="center"
            sx={{ 
              mt: 4,
              px: { xs: 2, sm: 4, md: 6 }
            }}
          >
            {t('about.descexp4')}
          </Typography>

          <Divider>
            <span />
          </Divider>
        </Content>
      </Container>
    </StyledAbout>
  );
};

export default About;