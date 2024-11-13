import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/perfil.jpg";
import DownloadingIcon from '@mui/icons-material/Downloading';
import InboxIcon from '@mui/icons-material/Inbox';
import StyledButton from "../../../../components/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackGround/AnimatedBackGround";
import { useTranslation } from "react-i18next";
import ptPDF from '/public/EduardoPachecoCV-pt.pdf'
import enPDF from '/public/EduardoPachecoCV-en.pdf'

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      paddingTop: "40px",
      minHeight: "auto",
    },
    [theme.breakpoints.up('sm')]: {
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
    borderRadius: "50%",
    border: `3px solid ${theme.palette.primary.main}`,
    objectFit: "cover",
    [theme.breakpoints.down('sm')]: {
      width: "200px",
      height: "200px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: "250px",
      height: "250px",
    },
    [theme.breakpoints.up('md')]: {
      width: "18vw",
      height: "18vw",
      maxWidth: "300px",
      maxHeight: "300px",
    }
  }));

  const StyledContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '14%',
    }
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    }
  }));

  const ButtonWrapper = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down('sm')]: {
      '& button': {
        minHeight: '48px',
      }
    },
    [theme.breakpoints.up('sm')]: {
      '& button': {
        minHeight: '56px',
      }
    }
  }));

  const handleDownloadCV = () => {
    const language = t('hero.pdf');
    const pdfUrl = language === 'pt' ? ptPDF : enPDF;
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  const handleContactMe = () => {
    const yourEmail = "edu.pacheco.carvalho@gmail.com";
    const subject = t('hero.subject');
    const body = t('hero.email');
    const emailLink = `mailto:${yourEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = emailLink;
  };

  const { t } = useTranslation();

  return (
    <StyledHero>
      <StyledContainer maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, sm: 6, md: 8, lg: 10 }}
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <Box
              position="relative"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Box
                position="absolute"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "120%",
                    md: "140%"
                  },
                  top: { xs: -60, sm: -80, md: -120 },
                  right: { xs: 0, sm: 50, md: 100 }
                }}
              >
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImage src={Avatar} alt="Profile" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <StyledTypography
              variant="h1"
              textAlign={{ xs: 'center', md: 'left' }}
              gutterBottom
            >
              {t('hero.title')}
            </StyledTypography>
            <StyledTypography
              variant="h6"
              textAlign={{ xs: 'center', md: 'left' }}
              gutterBottom
              sx={{
                fontSize: { xs: '1rem', sm: '1.25rem' }
              }}
            >
              {t('hero.subtitle')}
            </StyledTypography>
            <StyledTypography
              variant="subtitle1"
              textAlign={{ xs: 'center', md: 'left' }}
              gutterBottom
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              {t('hero.text')}
            </StyledTypography>
            <Box mt={4}>
              <Grid
                container
                spacing={2}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <ButtonWrapper>
                    <StyledButton onClick={handleDownloadCV}>
                      <DownloadingIcon />
                      <Typography>{t('hero.downloadCV')}</Typography>
                    </StyledButton>
                  </ButtonWrapper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <ButtonWrapper>
                    <StyledButton onClick={handleContactMe}>
                      <InboxIcon />
                      <Typography>{t('hero.contactMe')}</Typography>
                    </StyledButton>
                  </ButtonWrapper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledHero>
  );
};

export default Hero;