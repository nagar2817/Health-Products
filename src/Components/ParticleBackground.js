import React, { useEffect } from 'react';
import * as tsParticles from 'tsparticles-engine';

const ParticleBackground = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles-container');

    if (particlesContainer) {
      tsParticles.init({
        container: particlesContainer,
        // Add your configuration options here
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          // Add more particle options as needed
        },
      });
    }
  }, []);

  return <div id="particles-container" />;
};

export default ParticleBackground;
