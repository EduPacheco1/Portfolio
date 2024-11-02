import { Container, styled, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const Skills = () => {

    const { t } = useTranslation();

    const SkillBox = styled("div")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `2px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap:"10px",
        '&:hover': {
          backgroundColor: theme.palette.secondary.light
        }
      }));

    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "28vh",
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

    const skills = [
        { title: "Java" },
        { title: "Spring" },
        { title: "RESTful APIs" },
        { title: "JWT" },
        { title: "SQL/NoSQL" },
        { title: "Docker" },
        { title: "Swagger" },
        { title: "JavaScript" },
        { title: "TypeScript" },
        { title: "React" },
        { title: "Node" },
        { title: "React Native" }
    ];

    return (
        <StyledSkills>
            <Container maxWidth="lg">
                <Typography color="primary.contrastText" variant="h2" textAlign="center" gutterBottom>
                {t('about.skill')}
                </Typography>
                <Grid container spacing={2}>
                    {skills.map((skill, index) => (
                        <Grid item xs={12} md={2} key={index}>
                            <SkillBox>
                                <Typography variant="body1">{skill.title}</Typography>
                            </SkillBox>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledSkills>
    );
};

export default Skills;