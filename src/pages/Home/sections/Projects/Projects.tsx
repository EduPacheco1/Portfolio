import { Container, styled, Typography, Grid, Box } from "@mui/material";
import StyledButton from "../../../../components/StyledButton";
import Image from "../../../../assets/images/e-commerce.jpg";
import Image2 from "../../../../assets/images/java.jpg";
import Image3 from "../../../../assets/images/react.jpg";
import Image4 from "../../../../assets/images/reactnat.jpg";

const StyledProject = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    display: "flex",
    alignItems: "center",
    paddingBottom: "100px",
    [theme.breakpoints.up('xs')]: {
        paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: "0px",
    }
}));

const ProjectCard = styled(Box)(({ theme }) => ({
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '500px',
    overflow: 'hidden',
}));

const ProjectImage = styled('img')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
    width: '300px',
    height: '200px',
    margin: '20px auto',
    maxWidth: '100%',
    maxHeight: '50%',
}));

const ProjectButtons = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    gap: theme.spacing(2)
}));

const handleButtonClick = (link: string | undefined): void => {
    if (typeof link === 'string' && link.length > 0) {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
};

const Projects = () => {
    const projects = [
        {
            title: "Project API - Ecommerce",
            image: Image,
            description: "REST API study project. (BackEnd)",
            techDescription: "Built with: Java, Spring, PostgreSQL, JWT, and Swagger.",
            button1Label: "View Code",
            button1Link: "https://github.com/EduPacheco1/ProjetoAPIRest/tree/main",
        },
        {
            title: "Project Sales - Java POO",
            image: Image2,
            description: "Java (POO) study project.",
            techDescription: "Built with: Java and PostgreSQL",
            button1Label: "View Code",
            button1Link: "https://github.com/EduPacheco1/ProjetoPOO/tree/main/SerraTec-POO-Grupo3/ProjetoPooGrupo3",
        },
        {
            title: "Project React - Ecommerce",
            image: Image3,
            description: "React study project. (FrontEnd)",
            techDescription: "Built with: React, JavaScript, HTML, CSS and Node.",
            button1Label: "View Code",
            button1Link: "https://github.com/EduPacheco1/ProjetoReact/tree/main/TrabalhoSerratec-ReactWeb",
        },
        {
            title: "Project React Native - CardGame",
            image: Image4,
            description: "React Native study project. (FrontEnd)",
            techDescription: "Built with: React Native, TypeScript, HTML, CSS and Node.",
            button1Label: "View Code",
            button1Link: "https://github.com/EduPacheco1/ProjetoReactNative/tree/main/YuGiMarket",
        },
    ];

    return (

        <StyledProject>
        <Container maxWidth="lg">
            <Typography color="primary.main" variant="h2" textAlign="center" pt = {5} mb={5}>Projects</Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index}>
                        <ProjectCard>
                            <Typography color="primary.main" variant="h4" mb={2}>{project.title}</Typography>
                            <ProjectImage src={project.image} />
                            <Typography color="primary.main" variant="body1" mt={2} mb={1}>{project.description}</Typography>
                            <Typography color="primary.main" variant="caption">{project.techDescription}</Typography>
                            <ProjectButtons>
                                <StyledButton onClick={() => handleButtonClick(project.button1Link)}>
                                    <Typography>{project.button1Label}</Typography>
                                </StyledButton>
                            </ProjectButtons>
                        </ProjectCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </StyledProject>
    );
};

export default Projects;
