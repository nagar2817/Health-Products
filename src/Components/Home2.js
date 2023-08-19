import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

// Placeholder images (replace with your own)
const aiImageURL = 'https://via.placeholder.com/400x300';
const medicineImageURL = 'https://via.placeholder.com/400x300';

function Home() {
  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Welcome to our AI Healthcare Startup
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <img src={aiImageURL} alt="AI" style={{ width: '100%' }} />
            <CardContent>
              <Typography variant="h5" component="div">
                AI in Healthcare
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ante
                in nisi congue dictum vel a nisi.
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <img src={medicineImageURL} alt="Medicine" style={{ width: '100%' }} />
            <CardContent>
              <Typography variant="h5" component="div">
                Medicine and Technology
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ante
                in nisi congue dictum vel a nisi.
              </Typography>
              <Button variant="contained" color="primary">
                Explore
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
