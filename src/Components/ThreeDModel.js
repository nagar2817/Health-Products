import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    height: '100vh',
    scrollSnapAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    width: '1400px',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    gap: '20px',
    flex: 2,
  },
  right: {
    position: 'relative',
    flex: 3,
    height: '50%',
  },
  title: {
    fontSize: '74px',
    color: 'black',
  },
  what: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    gap: '10px',
  },
  desc: {
    fontSize: '24px',
    color: 'black',
  },
  line: {
    height: '5px',
  },
  img: {
    height: '600px',
    width: '800px',
    objectFit: 'contain',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    margin: 'auto',
    animation: '$animate 2s infinite ease alternate',
  },
  button: {
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'orange',
    color: 'white',
    width: '100px',
    padding: '10px',
    cursor: 'pointer',
    fontWeight: 500,
  },
  sub: {
    color: 'orange',
  },
  '@keyframes animate': {
    to: {
      transform: 'translateY(25px)',
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.section}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.left}>
              <Typography variant="h1" className={classes.title}>
                Think. Make. Solve.
              </Typography>
              <div className={classes.what}>
                <img src="./img/line.png" alt="line" className={classes.line} />
                <Typography variant="h2" className={classes.sub}>
                  What we Do
                </Typography>
              </div>
              <Typography variant="body1" className={classes.desc}>
                We enjoy creating delightful, human-centered digital experiences.
              </Typography>
              <Button variant="contained" color="primary" className={classes.button}>
                Learn More
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.right}>
              <Canvas>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.6}>
                  <MeshDistortMaterial
                    color="#d0900f"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Canvas>
              <img
                src="../static/3d-medical-background-with-male-head-brain-dna-strands.jpg" // Replace with your medicine image URL
                alt="medicine"
                className={classes.img}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Hero;
