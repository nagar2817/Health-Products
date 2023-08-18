import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const HomeComponent = () => {
  return (
    <div>
      <Button component={Link} to="/women-health-package">
        Women Health Package
      </Button>
      <Button component={Link} to="/fever-package">
        Fever Package
      </Button>
    </div>
  );
};

export default HomeComponent;