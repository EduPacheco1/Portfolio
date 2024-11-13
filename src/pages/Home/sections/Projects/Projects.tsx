import { Container, styled, Typography, Grid, Box } from "@mui/material";
import StyledButton from "../../../../components/StyledButton";
import Image from "../../../../assets/images/e-commerce.jpg";
import Image2 from "../../../../assets/images/java.jpg";
import Image3 from "../../../../assets/images/react.jpg";
import Image4 from "../../../../assets/images/reactnat.jpg";
import { useTranslation } from "react-i18next";

const StyledProject = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(6, 2),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 2),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3, 1),
  }
}));

const ProjectCard = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  height: '100%',
  minHeight: '500px',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    minHeight: '400px',
  }
}));

const ProjectImage = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  objectFit: 'cover',
  width: '100%px',
  height: '200px',
  marginBottom: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  [theme.breakpoints.down("sm")]: {
    height: '150px',
  }
}));

const ProjectContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: theme.spacing(2),
}));

const ProjectButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'auto',
  padding: theme.spacing(2, 0),
  gap: theme.spacing(2),
  width: '100%',
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 600,
  textAlign: 'center',
  [theme.breakpoints.down("sm")]: {
    fontSize: '1.5rem',
  }
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  flex: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: '0.9rem',
  }
}));

const TechDescription = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.down("sm")]: {
    fontSize: '0.75rem',
  }
}));

const handleButtonClick = (link: string | undefined): void => {
  if (typeof link === 'string' && link.length > 0) {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
};

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: t('project1.title'),
      image: Image,
      description: t('project1.description'),
      techDescription: t('project1.techDescription'),
      button1Label: t('project1.button1Label'),
      button1Link: "https://github.com/EduPacheco1/ProjetoAPIRest/tree/main",
    },
    {
      title: t('project2.title'),
      image: Image2,
      description: t('project2.description'),
      techDescription: t('project2.techDescription'),
      button1Label: t('project2.button1Label'),
      button1Link: "https://github.com/EduPacheco1/ProjetoPOO/tree/main/SerraTec-POO-Grupo3/ProjetoPooGrupo3",
    },
    {
      title: t('project3.title'),
      image: Image3,
      description: t('project3.description'),
      techDescription: t('project3.techDescription'),
      button1Label: t('project3.button1Label'),
      button1Link: "https://github.com/EduPacheco1/ProjetoReact/tree/main/TrabalhoSerratec-ReactWeb",
    },
    {
      title: t('project4.title'),
      image: Image4,
      description: t('project4.description'),
      techDescription: t('project4.techDescription'),
      button1Label: t('project4.button1Label'),
      button1Link: "https://github.com/EduPacheco1/ProjetoReactNative/tree/main/YuGiMarket",
    },
  ];

  return (
    <StyledProject>
      <Container maxWidth="lg">
        <Typography 
          color="primary.main" 
          variant="h2" 
          textAlign="center" 
          sx={{
            mb: { xs: 3, sm: 4, md: 5 },
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          {t('nav.projects')}
        </Typography>
        
        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }}
          alignItems="stretch"
        >
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ProjectCard>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectContent>
                  <ProjectTitle color="primary.main" variant="h4">
                    {project.title}
                  </ProjectTitle>
                  <ProjectDescription color="primary.main" variant="body1">
                    {project.description}
                  </ProjectDescription>
                  <TechDescription color="primary.main" variant="caption">
                    {project.techDescription}
                  </TechDescription>
                  <ProjectButtons>
                    <StyledButton 
                      onClick={() => handleButtonClick(project.button1Link)}
                      sx={{
                        width: { xs: '100%', sm: 'auto' }
                      }}
                    >
                      <Typography>{project.button1Label}</Typography>
                    </StyledButton>
                  </ProjectButtons>
                </ProjectContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProject>
  );
};

export default Projects;