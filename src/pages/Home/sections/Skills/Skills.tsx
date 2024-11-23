import { Container, styled, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "28vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(6, 2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 1),
  }
}));

const SkillBox = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `2px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: theme.spacing(1.5, 2),
  width: "100%",
  height: "100%",
  color: theme.palette.primary.contrastText,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
  '&:hover': {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    transform: "translateY(-2px)",
  }
}));

const SkillsContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 2),
  }
}));

const SkillsHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    marginBottom: theme.spacing(3),
  }
}));

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    { title: "Java" },
    { title: "Spring" },
    { title: "RESTful APIs" },
    { title: "JWT" },
    { title: "SQL/NoSQL" },
    { title: "Docker" },
    { title: "Swagger" },
    { title: "AWS" },
    { title: "TypeScript" },
    { title: "React" },
    { title: "Node" },
    { title: "React Native" }
  ];

  return (
    <StyledSkills>
      <SkillsContainer maxWidth="lg">
        <SkillsHeader 
          color="primary.contrastText" 
          variant="h2" 
          textAlign="center"
          gutterBottom
        >
          {t('about.skill')}
        </SkillsHeader>
        
        <Grid 
          container 
          spacing={{ xs: 1.5, sm: 2, md: 3 }}
          justifyContent="center"
        >
          {skills.map((skill, index) => (
            <Grid 
              item 
              xs={6}     // 2 items per row on mobile
              sm={4}     // 3 items per row on tablet
              md={3}     // 4 items per row on desktop
              lg={2}     // 6 items per row on large screens
              key={index}
            >
              <SkillBox>
                <Typography 
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: '0.875rem',
                      sm: '1rem'
                    },
                    textAlign: 'center',
                    width: '100%'
                  }}
                >
                  {skill.title}
                </Typography>
              </SkillBox>
            </Grid>
          ))}
        </Grid>
      </SkillsContainer>
    </StyledSkills>
  );
};

export default Skills;