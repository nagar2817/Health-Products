import React from 'react';
import Typography from '@mui/material/Typography';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import Box from '@mui/material/Box';

function Tags({ tag }) {
  return (
    <Box
      sx={{
        display: 'flex', // Use flex display
        alignItems: 'center',
        borderRadius: '16px', // Adjust the value for the desired roundness
        backgroundColor: '#e0e0e0', // Adjust the background color as needed
        padding: '4px 8px', // Adjust the padding as needed
        marginRight: '8px', // Add margin to create a gap between tags
      }}
    >
      <LocalOfferRoundedIcon sx={{ fontSize: 'small', marginRight: '4px' }} />
      <Typography variant="body2" color="text.secondary">
        {tag}
      </Typography>
    </Box>
  );
}



export default Tags;
