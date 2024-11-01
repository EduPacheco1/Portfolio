import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/perfil.jpg";
import DownloadingIcon from '@mui/icons-material/Downloading';
import InboxIcon from '@mui/icons-material/Inbox';
import StyledButton from "../../../../components/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackGround/AnimatedBackGround";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "80px",
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "120px",
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: "160px",
        }
    }));

    const StyledImage = styled("img")(({ theme }) => ({
        width: "18vw",
        height: "18vw",
        borderRadius: "50%",
        border: `3px solid ${theme.palette.primary.main}`,
        objectFit: "contain",
    }));

    const handleDownloadCV = () => {
        const pdfUrl = '/CurriculoAtualizado.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'CurriculoAtualizado.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    const handleContactMe = () => {
        const yourEmail = "edu.pacheco.carvalho@gmail.com";
        const subject = "Contact from Eduardo Pacheco Portfolio";
        const body = "Hi Eduardo,\n\n I'm reaching out from your portfolio website. ";

        const emailLink = `mailto:${yourEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;

        window.location.href = emailLink;
    };

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Box position="relative">
                            <Box position="absolute" width={"140%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImage src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                        <Typography
                            color="primary.main"
                            variant="h1"
                            textAlign="center"
                            gutterBottom
                        >
                            Eduardo Pacheco
                        </Typography>
                        <Typography color="primary.main" variant="h2" textAlign="center" gutterBottom>I'm a Software Engineer</Typography>
                        <Box mt={4}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item xs={12} sm={6} md={6} lg={4}>
                                    <StyledButton onClick={handleDownloadCV}>
                                        <DownloadingIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4}>
                                    <StyledButton onClick={handleContactMe}>
                                        <InboxIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;