import { Box, Container, Grid, styled, Typography } from "@mui/material";

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
  marginLeft:"320px",
  width: "200px",
  height: "150px", // Set a fixed height
}));

const About = () => {
  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Content>
          <Header variant="h2" align="center" paddingTop={5} gutterBottom>
            About Me
          </Header>

          <Box sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={0}>
              <Grid item xs={6} md={3}>
                <ExperienceBox>
                  <Typography variant="h6">Experience</Typography>
                  <Typography variant="body2">
                    1 year as Java Developer<br />
                    14 years in IT industry<br />
                    9 years as ERP Consultant
                  </Typography>
                </ExperienceBox>
              </Grid>
              <Grid item xs={6} md={3}>
                <ExperienceBox>
                  <Typography variant="h6">Education</Typography>
                  <Typography variant="body2">
                    Bachelor's degree in Computer Science<br />
                    SERRATEC/UFRJ partnership project
                  </Typography>
                </ExperienceBox>
              </Grid>
            </Grid>
          </Box>

          <Typography variant="body1" align="center">
            Java developer with over 14 years of IT experience, including 9 years as an ERP Consultant.
            Passionate about solving complex problems and learning new things. I have a broad market view, skills in back-end (Java, C#), REST APIs,
            databases (SQL, PostgreSQL) and front-end (JavaScript, React, CSS, HTML), with experience in project creation and coordination,
            ERP processes, among others.<br /><br />
          </Typography>

          <Typography variant="body1" align="center">
            I've participated in projects that covered all the technologies necessary for full-stack web development.
            In the final SERRATEC project in partnership with UFRJ, I worked on the back-end, from database structuring to front-end communication,
            using mainly JAVA, REST API and SPRING.
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