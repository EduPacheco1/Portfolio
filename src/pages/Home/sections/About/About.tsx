import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up('xs')]: {
    paddingTop: "100px",
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: "0px",
  }
}));

const Content = styled("div")({
  padding: "20px",
  width: "100%",
  maxWidth: "1200px",
});

const Header = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const ExperienceBox = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  border: `2px solid ${theme.palette.primary.contrastText}`,
  textAlign: "center",
  alignItems: "center",
  marginLeft: "320px",
  width: "200px",
  height: "150px", // Set a fixed height
}));

const About = () => {
  const { t } = useTranslation();
  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Content>
          <Header variant="h2" align="center" paddingTop={5} gutterBottom>
          {t('nav.about')}
          </Header>

          <Box sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={0}>
              <Grid item xs={6} md={3}>
                <ExperienceBox>
                  <Typography variant="h6">{t('about.exp')}</Typography>
                  <Typography variant="body2">
                    {t('about.descexp1')}
                  </Typography>
                </ExperienceBox>
              </Grid>
              <Grid item xs={6} md={3}>
                <ExperienceBox>
                  <Typography variant="h6">{t('about.edu')}</Typography>
                  <Typography variant="body2">
                    {t('about.descexp2')}
                  </Typography>
                </ExperienceBox>
              </Grid>
            </Grid>
          </Box>

          <Typography variant="body1" align="center">
            {t('about.descexp3')}<br /><br />
          </Typography>

          <Typography variant="body1" align="center">
          {t('about.descexp4')}
          </Typography>

          <Typography variant="body1" align="center" sx={{ mt: 4 }}>
            _______________________________________________________________________________________________________________________________________________________________
          </Typography>
        </Content>
      </Container>
    </StyledAbout>
  );
};

export default About;