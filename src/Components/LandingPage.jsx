import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Logo from '../Icons/Logo';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from './Features';
import Footer from './Footer';

export default function LandingPage() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000
  };

  const partnerCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#634E94",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: '100%',
          height: "64px",
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" />
          <Logo />
          <Box flexGrow={1} />
          <Stack spacing={2} direction="row">
            <Button variant="contained">LOGIN</Button>
            <Button variant="outlined" color="white">REGISTER</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden', backgroundColor: "#ECEFF5" }}>
        <Slider {...carouselSettings}>
          <img src="/first.jpg" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <img src="/second.jpg" alt="Slide 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <img src="/third.jpg" alt="Slide 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Slider>
      </Box>
      <Container sx={{ padding: 3, backgroundColor: "#D0D8E8" }}>
        <Features />
      </Container>
      <Box mt={4} sx={{ backgroundColor: "#ECEFF5", py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Trusted by these Best Companies
        </Typography>
        <Slider {...partnerCarouselSettings}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Box key={i} sx={{ textAlign: 'center', padding: 2 }}>
              <img src={`/p${i}.jpg`} alt={`Partner ${i}`} style={{ display: 'block', margin: '0 auto', width: '50px', height: '50px' }} />
              <Typography variant="h6" align="center">
                Anonymous Partner
 </Typography>
              <Typography variant="body1" align="center">
                "Wise words from Partner."
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box textAlign="center" sx={{ py: { xs: 8, sm: 4 }, backgroundColor: "#D0D8E8" }}>
        <Typography variant="h4" gutterBottom>
          Become a part of Graviti and ATTRACT Customers
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2 }}>
          Register
        </Button>
      </Box>
      <Footer />
    </div>
  );
}