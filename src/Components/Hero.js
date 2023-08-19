import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Hero = () => {
  return (
    <div>
      {/* Header Section */}
      <Paper elevation={3} style={{ padding: '2rem 0' }}>
        <Container>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Welcome to Our AI Healthcare Startup
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            We are dedicated to revolutionizing healthcare through AI technology.
          </Typography>
          <Button variant="contained" color="primary" size="large" style={{ margin: '1rem auto', display: 'block' }}>
            Learn More
          </Button>
        </Container>
      </Paper>

      {/* About Section */}
      <Container style={{ margin: '2rem 0' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1">
              We are a cutting-edge AI healthcare startup with a mission to improve patient care, diagnosis, and treatment outcomes through innovative artificial intelligence solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src="/placeholder-image.jpg" alt="Our Team" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
        </Grid>
      </Container>

      {/* Technology Section */}
      <Paper elevation={3} style={{ padding: '2rem 0' }}>
        <Container>
          <Typography variant="h5" gutterBottom>
            Our Technology
          </Typography>
          <Typography variant="body1">
            We leverage state-of-the-art machine learning and deep learning algorithms to analyze medical data, providing insights and predictions that enable more accurate and timely healthcare decisions.
          </Typography>
        </Container>
      </Paper>

      {/* Services Section */}
      <Container style={{ margin: '2rem 0' }}>
        <Typography variant="h5" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="h6" gutterBottom>
                Telemedicine
              </Typography>
              <Typography variant="body2">
                Access healthcare professionals remotely for consultations and diagnoses.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="h6" gutterBottom>
                Medical Imaging
              </Typography>
              <Typography variant="body2">
                Advanced image analysis for accurate diagnoses in radiology.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="h6" gutterBottom>
                Healthcare Analytics
              </Typography>
              <Typography variant="body2">
                Data-driven insights to optimize healthcare operations and patient outcomes.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Contact Section */}
      <Paper elevation={3} style={{ padding: '2rem 0' }}>
        <Container>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Have questions or interested in our services? Contact us today.
          </Typography>
          <Button variant="contained" color="primary" size="large" style={{ margin: '1rem auto', display: 'block' }}>
            Contact Us
          </Button>
        </Container>
      </Paper>
    </div>
  );
};

export default Hero;
