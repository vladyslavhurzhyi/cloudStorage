import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { RxAvatar } from 'react-icons/rx';

export const MyCloud = () => {
  return (
    <>
      <Box display={'flex'} padding={'20px'} gap="10px">
        <Input placeholder="Search files..." />
        <Button color="white" bg="#7173EE" w="100%" mb="19px">
          Login
        </Button>
        <IconButton aria-label="Profile" icon={<RxAvatar />} />
      </Box>
    </>
  );
};
