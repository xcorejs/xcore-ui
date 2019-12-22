import Box from 'components/Box';
import React from 'react';

export default { title: 'Box' };

export const BasicUsage: React.FC = () => {
  return (
    <Box>
      <Box background='red' color='white' p='10px' my='15px'>
        Box 1
      </Box>
      <Box background='blue' color='white' p='10px' my='15px'>
        Box 2
      </Box>
    </Box>
  );
};
