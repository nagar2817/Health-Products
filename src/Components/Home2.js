import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ThreeDModel from './ThreeDModel';

// Placeholder images (replace with your own)
const aiImageURL = 'https://via.placeholder.com/400x300';
const medicineImageURL = 'https://via.placeholder.com/400x300';

function Home() {
  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Welcome to our AI Healthcare Startup
      </Typography>
    <ThreeDModel />
     
    </Container>
  );
}

export default Home;
